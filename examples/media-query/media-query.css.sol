body {
    width: 60%;
    margin-left: 10em;
}

@media screen and (width >=960px) {
    aside {
        width: 20%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        background: lightblue;
    }
}

ul {
    padding-left: 0;
}

li {
    list-style-type: none;
}

aside>* {
    padding: 0 2em;
}

.ad {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 1em;
    background: #77dd77;
    width: 90%;
    height: 100px;
    margin: 1em auto;
    padding: 0;
}

main .ad {
    display: none;
}

@media screen and (width < 960px) {
    body {
        margin: auto;
    }

    main .ad {
        display: flex;
    }

    aside {
        display: none;
    }
}