import React from "react";

export const HomepageHeader = () => {
    return (
        // <style>

        //   header {
        //     background-color: #333;
        //     color: #fff;
        //     padding: 20px;
        //   }

        //   nav ul {
        //     list-style-type: none;
        //     margin: 0;
        //     padding: 0;
        //     overflow: hidden;
        //   }

        //   nav li {
        //     float: left;
        //   }

        //   nav a {
        //     display: block;
        //     color: #fff;
        //     text-align: center;
        //     padding: 14px 16px;
        //     text-decoration: none;
        //   }

        //   .content {
        //     padding: 20px;
        //   }

        //   .active {
        //     background-color: #2b8b2e;
        //   }
        // </style>
        // <script>
        //   function openTab(tabName) {
        //     var i, tabContent;
        //     tabContent = document.getElementsByClassName("tab-content");
        //     for (i = 0; i < tabContent.length; i++) {
        //       tabContent[i].style.display = "none";
        //     }
        //     document.getElementById(tabName).style.display = "block";

        //     var tabLinks = document.getElementsByClassName("tab-link");
        //     for (i = 0; i < tabLinks.length; i++) {
        //       tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        //     }
        //     event.currentTarget.className += " active";
        //   }
        // </script>
        //   </head>
        <body>
            <title>Mental Health Website</title>
            {/* <header>
                <h1>Mental Health Website</h1>
                <nav>
                    <ul>
                        <li>
                            <a
                                href="#"
                                class="tab-link active"
                                onclick="openTab('home')"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="tab-link"
                                onclick="openTab('tab1')"
                            >
                                tab1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="tab-link"
                                onclick="openTab('tab2')"
                            >
                                tab2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="tab-link"
                                onclick="openTab('tab3')"
                            >
                                tab3
                            </a>
                        </li>
                    </ul>
                </nav>
            </header> */}

            <div class="content">
                {/* <div id="home" class="tab-content" style="display: block;">
                    <h2>Welcome to Mental Health Website!</h2>
                    <p>This is the home page of our mental health website.</p>
                </div>

                <div id="tab1" class="tab-content">
                    <h2>Title</h2>
                    <p>Stuff</p>
                </div>

                <div id="tab2" class="tab-content">
                    <h2>TITLE</h2>
                    <p>STUFF</p>
                </div>

                <div id="tab3" class="tab-content">
                    <h2>title</h2>
                    <p>stuff</p>
                </div> */}
            </div>

            <script>openTab('home');</script>
        </body>
    );
};
