<nav>
  <ul>
    <li>
      <div class="header">
        <h1 class="header__initials">▲</h1>
      </div>
    </li>
    <li><a class="link" href="/" target="_blank">Home</a></li>
    <li><a class="link" href="/projects" target="_blank">Projects</a></li>
    <li><a class="link" href="/blog" target="_blank">Blog</a></li>
  </ul>
</nav>

<style lang="scss">
  nav {
    padding: 14px 0;
    margin-bottom: -30px;
    font-family: "Montserrat", sans-serif;
  }

  nav ul {
    position: relative;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 0;
    display: flex;
    align-items: center;

    li {
      list-style: none;
      padding: 0 10px;
    }

    li > a {
      color: #000;
      text-decoration: none;
      padding: 20px 10px;
      position: relative;

      &:hover:after {
        width: 100%;
        right: auto;
        left: 0;
      }

      &:after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #000;
        position: absolute;
        left: auto;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.3s ease-in;
      }
    }
  }

  .header {
    display: flex;
    align-items: center;

    &__initials {
      display: inline-block;
      font-size: 3em;
      background: url("https://media.giphy.com/media/uAuUFMMwy2tqXLyuFB/giphy-downsized.gif");
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-size: contain;
      background-position: center;
    }

    &__initials2 {
      display: inline-block;
      font-size: 3em;
      line-height: 1em;
      letter-spacing: -3px;
      color: black;
      background: url("https://cdn.dribbble.com/users/566524/screenshots/4169266/purppple01.gif");
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-size: contain;
      background-position: center;
    }

    &__title {
      color: black;
      font-size: 2em;
      letter-spacing: -3px;

      h2 {
        font-size: 2em;

        margin-bottom: 0;
      }
    }
  }
</style>
