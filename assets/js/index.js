function setActiveClass(event) {
    document.querySelector(".portfolio__tab--active").classList.remove("portfolio__tab--active");
    event.target.classList.add("portfolio__tab--active");
};

document.addEventListener("alpine:init", () => {
    Alpine.data("portfolioTabs", () => ({
        tabName: "طبیعت",

        tabs: [
            {
                category: "طبیعت",
                tabContents: [
                    {
                        imgSrc: "assets/images/portfolio/nature/img_1.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                    {
                        imgSrc: "assets/images/portfolio/nature/img_2.jpg",
                        title: "لورم ایپسوم ۲",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                    {
                        imgSrc: "assets/images/portfolio/nature/img_3.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                    {
                        imgSrc: "assets/images/portfolio/nature/img_4.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                ]
            },
            {
                category: "تکنولوژی",
                tabContents: [
                    {
                        imgSrc: "assets/images/portfolio/technology/img_1.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                    {
                        imgSrc: "assets/images/portfolio/technology/img_2.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                    {
                        imgSrc: "assets/images/portfolio/technology/img_3.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                    {
                        imgSrc: "assets/images/portfolio/technology/img_4.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                ]
            },
            {
                category: "مسافرت",
                tabContents: [
                    {
                        imgSrc: "assets/images/portfolio/travel/img_1.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                    {
                        imgSrc: "assets/images/portfolio/travel/img_2.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                    {
                        imgSrc: "assets/images/portfolio/travel/img_3.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                    {
                        imgSrc: "assets/images/portfolio/travel/img_4.jpg",
                        title: "لورم ایپسوم",
                        caption: "لورم ایپسوم متن ساختگی"
                    },
                ]
            },
        ]
    }));
});
AOS.init();