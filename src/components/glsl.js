export const shader = `
varying vec3 vPos;
  // varying vec3 vNormal;

  uniform float uTick;

  const float PI = 3.1415926;

  mat2 calcRotate2D(float _time){
    float _sin = sin(_time);
    float _cos = cos(_time);
    return mat2(_cos, _sin, -_sin, _cos);
  }

  vec3 paramFunction1(){
      float u = -uv.x * 2.0 * PI;
      float v = uv.y * PI;

      float _x = sin(u) * sin(v);
      float _y = cos(u) * sin(v);
      float _z = cos(v);

      return vec3(_x, _y, _z);
  }


  vec3 paramFunction2(){
      float a = 3.0;
      float n = 3.0;
      float m = 1.0;

      float u = uv.x * 4.0 * PI;
      float v = uv.y * 2.0 * PI;

      float _x = (a + cos(n * u / 2.0) * sin(v) - sin(n * u / 2.0) * sin(2.0 * v)) * cos(m * u / 2.0);
      float _y = (a + cos(n * u / 2.0) * sin(v) - sin(n * u / 2.0) * sin(2.0 * v)) * sin(m * u / 2.0);
      float _z = sin(n * u / 2.0) * sin(v) + cos(n * u / 2.0) * sin(2.0 * v);

      return vec3(_x, _y, _z);
  }


  void main(){
    float time = uTick * 0.012;

    float shapeRatio = cos(time * 1.5 + sin(time * 1.5)) * 0.5 + 0.5;

    vec3 shape1 = paramFunction1() * 1.5;
    vec3 shape2 = paramFunction2();


    vec3 newPos =mix(shape2, shape1, shapeRatio);
    // vec3 newPos = shape2;

    vec3 scalePos = newPos * 4.0;


    vec3 rotatePos = scalePos;
    rotatePos.yz = calcRotate2D(time * 0.6) * rotatePos.yz;
    rotatePos.xz = calcRotate2D(time * 0.6) * rotatePos.xz;

    vec4 mvPos = vec4(rotatePos, 1.0);

    vPos = mvPos.xyz;
    // vNormal = normal;

    gl_Position =projectionMatrix * modelViewMatrix * mvPos; 
  }
`

export const fragment = `
varying vec3 vPos;
  // varying vec3 vNormal;

  uniform float uTick;

  // base color
  const vec3 objColor = vec3(1.0);
  
  
  // hemisphere ground color
  const vec3 hemiLight_g = vec3(0.86,0.86,0.86);
  
  // hemisphere sky color
  const vec3 hemiLight_s_1 = vec3(0.5882352941176471,0.8274509803921568,0.8823529411764706);
  const vec3 hemiLight_s_2 = vec3(0.9686274509803922,0.8509803921568627,0.6666666666666666);
  const vec3 hemiLight_s_3 = vec3(0.8784313725490196,0.5882352941176471,0.7647058823529411);
  
  // directional light color
  const vec3 dirLight = vec3(0.16);
  const vec3 dirLight_2 = vec3(0.02);


  const vec3 hemiLightPos_1 = vec3(100.0, 100.0, -100.0);
  const vec3 hemiLightPos_2 = vec3(-100.0, -100.0, 100.0);
  const vec3 hemiLightPos_3 = vec3(-100.0, 100.0, 100.0);

  const vec3 dirLightPos = vec3(-30, 50, 50);
  const vec3 dirLightPos_2 = vec3(30, -50, -50);

  vec3 calcIrradiance_hemi(vec3 newNormal, vec3 lightPos, vec3 grd, vec3 sky){
    float dotNL = dot(newNormal, normalize(lightPos));
    float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

    return mix(grd, sky, hemiDiffuseWeight);
  }

  vec3 calcIrradiance_dir(vec3 newNormal, vec3 lightPos, vec3 light){
    float dotNL = dot(newNormal, normalize(lightPos));

    return light * max(0.0, dotNL);
  }


  void main(){

    float time = uTick * 0.006;

    vec3 _normal = normalize(cross(dFdx(vPos), dFdy(vPos)));

    vec3 hemiColor = vec3(0.0);
    hemiColor += calcIrradiance_hemi(_normal, hemiLightPos_1, hemiLight_g, hemiLight_s_1) * 0.38;
    hemiColor += calcIrradiance_hemi(_normal, hemiLightPos_2, hemiLight_g, hemiLight_s_2) * 0.26;
    hemiColor += calcIrradiance_hemi(_normal, hemiLightPos_3, hemiLight_g, hemiLight_s_3) * 0.36;
    
    vec3 dirColor = vec3(0.0);
    dirColor += calcIrradiance_dir(_normal, dirLightPos, dirLight);
    dirColor += calcIrradiance_dir(_normal, dirLightPos_2, dirLight_2);


    vec3 color = objColor * hemiColor;
    
    color += dirColor;


    gl_FragColor = vec4(color, 1.0);
  }
`
