document.addEventListener("DOMContentLoaded", function () {
    const menuData = {
        Sunday: {
            breakfast: {
                name: "Poha,Sev,Curry, Seasonal fruit",
                daily:"Bread, Butter, Jam, Milk, Tea ☕",
                image: "https://th.bing.com/th/id/R.904b06129c0dc95dbe984074a2567224?rik=%2bMbB0wia2L0IzQ&riu=http%3a%2f%2fslurrp.club%2fwp-content%2fuploads%2f2019%2f05%2fDSC_0935.jpg&ehk=C3vZ3lQkhVpDqDW8sx%2bLW2jAZ%2bg7e3MI%2fFD5gkchMxk%3d&risl=&pid=ImgRaw&r=0",
                servings: "Breakfast",
                time: "7:30 To 10:00 AM",
            },
            lunch: {
                name: "Chole-Puri, Rice, Moong Dal, Bondi Raita",
                daily:"Salad, Achar, Papad",
                image: "https://i.ytimg.com/vi/qMbXJbCiOwo/maxresdefault.jpg",
                servings: "Lunch",
                time: "12:00 To 2:00 PM",
            },
            snacks: {
                name: "Cup Cakes/Dhokla, Tea ☕",
                image: "https://th.bing.com/th/id/R.5e9d914158f20abde43751bc56170aff?rik=IVjPf86fA0ExdQ&riu=http%3a%2f%2fwww.zedamagazine.com%2fwp-content%2fuploads%2f2018%2f06%2fIndian-Food-Samosa-Dish-HD-Wallpapers.jpg&ehk=CIZsxVe5CLA%2fpZXkiCdJuoTdrhucm2fgYqo%2fkXVfHls%3d&risl=&pid=ImgRaw&r=0",
                servings: "Snacks",
                time: "5:30 To 6:30 PM",
            },
            dinner: {
                name: "Kadhai Paneer, Dal Fry, Rice, Ice cream/Rasgulla",
                daily:"Salad Achar Chapati, Jeera Rice",
                image: "https://delish28.com/wp-content/uploads/2020/07/kadai-paneer-gravy-recipe-step-by-step-instructions.jpg",
                servings: "Dinner",
                time: "7:30 To 9:30 PM",
            },
        },
        Monday: {
            breakfast: {
                name: "Idli Sambhar Chutney, Banana", 
                daily:"Bread, Butter, Jam, Milk, Tea ☕",
                image: "https://www.mapsofindia.com/ci-moi-images/my-india/Idli-Sambhar.jpg",
                servings: "Breakfast",
                time: "7:30 To 9:30 AM",
            },
            lunch: {
                name: "Lobia,Dal Tadka,Chapati,Rice,Chach",
                daily:"Salad, Achar, Papad",
                image: "https://th.bing.com/th/id/OIP.zKtVAjPkzGjaEx4eZy7F2AHaEK?rs=1&pid=ImgDetMain",
                servings: "Lunch",
                time: "12:00 To 2:00 PM",
            },
            snacks: {
                name: "Veg Upma, Coffee ☕",
                image: "https://www.lordbyronskitchen.com/wp-content/uploads/2018/02/3-4.jpg",
                servings: "Snacks",
                time: "5:30 To 6:30 PM",
            },
            dinner: {
                name: "Aloo Kofte/Matar Aloo, Dal Makhani",
                daily:"Salad Achar Chapati Jeera Rice",
                image: "https://th.bing.com/th/id/OIP.67A25KMPP0di0rJDgzvOqgHaE8?rs=1&pid=ImgDetMain",
                servings: "Dinner",
                time: "7:30 To 9:30 PM",
            },
        },
        Tuesday: {
            breakfast: {
                name: "Uttapam Sambhar,Chatni, Sprouts",
                daily:"Bread, Butter, Jam, Milk, Tea ☕",
                image: "https://www.thespruceeats.com/thmb/Mlu27_tCoDxWISFcTevgPH5ft0I=/3888x2592/filters:fill(auto,1)/GettyImages-SUSANSAM-487133372-345586e7531e4709bd531be5673f3f14.jpg",
                servings: "Breakfast",
                time: "7:30 To 9:30 AM",
            },
            lunch: {
                name: "Soya Wadi, Dal, Chapati,Mutter Rice,Curd",
                daily:"Salad, Achar, Papad",
                image: "https://th.bing.com/th/id/R.313c7ab65a7697f52011dc8eeb57399d?rik=Etw66gDg05LWEQ&riu=http%3a%2f%2fwww.archanaskitchen.com%2fimages%2farchanaskitchen%2f1-Author%2fnithya.anantham%2fPunjabi_Lobia_Masala_Recipe_Punjabi_Style_Black_Eyed_Peas_Curry.jpg&ehk=NOPbr1S1mIhoSHwzTlyS2%2f7mSNNcjemRKec6TM8r9gY%3d&risl=&pid=ImgRaw&r=0",
                servings: "Lunch",
                time: "12:00 To 2:00 PM",
            },
            snacks: {
                name: "White Sauce Pasta ,  Tea ☕",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-fried-rice-020-1543875572.jpg?cropu003d0.668xw:1.00xh;0.262xw,0u0026resizeu003d480:*",
                servings: "Snacks",
                time: "5:30 To 6:30 PM",
            },
            dinner: {
                name: "Gatta Curry, Sambhar, Jalebi/Fruit Custard",
                daily:"Salad Achar Chapati, Rice",
                image: "dinner.jpeghttps://th.bing.com/th/id/OIP.0SXGtgCNz-zc9lB57ps6NAHaEK?rs=1&pid=ImgDetMain",
                servings: "Dinner",
                time: "7:30 To 9:30 PM",
            },
        },
        Wednesday: {
            breakfast: {
                name: "Aloo Paratha, Seasonal fruit",
                daily:"Bread, Butter, Jam, Milk, Tea ☕",
                image: "https://i.ytimg.com/vi/qulwctXHwT4/maxresdefault.jpg",
                servings: "Breakfast",
                time: "7:30 To 9:30 AM",
            },
            lunch: {
                name: "Kadi Pakoda, Sem Aloo, Chapati,Veg Pulav,Curd",
                daily:"Salad, Achar, Papad",
                image: "https://www.blog.sagmart.com/wp-content/uploads/2015/09/Kadhi-Pakora.jpg",
                servings: "Lunch",
                time: "12:00 To 2:00 PM",
            },
            snacks: {
                name: "Sev Poha, Tea ☕",
                image: "https://i.ytimg.com/vi/CthdvfRdABs/maxresdefault.jpg",
                servings: "Snacks",
                time: "5:30 To 6:30 PM",
            },
            dinner: {
                name: "Paneer,Dal, Mixed Veg",
                daily:"Salad Achar Chapati, Rice",
                image: "https://media.cntraveller.in/wp-content/uploads/2020/05/homemade-paneer-recipes-1366x768.jpg",
                servings: "Dinner",
                time: "7:30 To 9:30 PM",
            },
        },
        Thursday: {
            breakfast: {
                name: "Wada Sambhar,Chatani, Sprouts ",
                daily:"Bread, Butter, Jam, Milk, Tea ☕",
                image: "https://media.cntraveller.in/wp-content/uploads/2020/06/2B7TM36.jpg",
                servings: "Breakfast",
                time: "7:30 To 9:30 AM",
            },
            lunch: {
                name: "Desi Chana Gravy, Masoor Dal, Rice,Curd",
                daily:"Chapati,Salad, Achar, Papad",
                image: "https://th.bing.com/th/id/OIP.AOGJ-bHxz9f-3-CuZ7JyDQHaEK?rs=1&pid=ImgDetMain",
                servings: "Lunch",
                time: "12:00 To 2:00 PM",
            },
            snacks: {
                name: "Fried Rice, Coffee ☕",
                image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/htja5cilyvraig1rblwy",
                servings: "Snacks",
                time: "5:30 To 6:30 PM",
            },
            dinner: {
                name: "Corn Palak/Seasonal Veg, Chana Dal, Gulab Jamun/Kheer ",
                daily:"Salad Achar Chapati, Tomato Rice",
                image: "https://www.subbuskitchen.com/wp-content/uploads/2021/06/jeera-aloo_web3-1300x867.jpg",
                servings: "Dinner",
                time: "7:30 To 9:30 PM",
            },
        },
        Friday: {
            breakfast: {
                name: "Aloo Puri, Banana",
                daily:"Bread, Butter, Jam, Milk, Tea ☕",
                image: "https://th.bing.com/th/id/OIP.UWiKrM17pfPujsmsSvrNGAHaEK?rs=1&pid=ImgDetMain",
                servings: "Breakfast",
                time: "7:30 To 9:30 AM",
            },
            lunch: {
                name: "Sev Bhaji, Moong Dal, Rice, Paratha",
                daily:"Salad, Achar, Papad",
                image: "https://1.bp.blogspot.com/-H52u9SKc_LQ/XVPmjsmHQGI/AAAAAAAAHm4/bKFNJ2jSH5Ai_3bl2qzI0lOkQvbB8rTfQCLcBGAs/s1600/IMG_0186.JPG",
                servings: "Lunch",
                time: "12:00 To 2:00 PM",
            },
            snacks: {
                name: "Chana Masala, Tea ☕",
                image: "https://1.bp.blogspot.com/-SgJtnRvVKB0/XovHZQ444pI/AAAAAAAADSw/k9zng_ycfXsbR59HtQUAgrBi3QfBI_66QCEwYBhgLKs4DAMBZVoAilj7X6oBwie-hQRnuQOHHzz4Psv6fOEsMnPLFCan-nTt5wMN4EJCl768w4BYuoeQM4e9xFtsm0CFfMHtMwU85bRktQPQju-5CHKNa8enbrRW986QSqt17tg9mSoati7FEIpYgdTuPlfvUpQQ1A_ZWH8psu3TZv0P8IY8Hd40_gUfvqAwBi_UOG7yi4L4Hl-AEfjcZSc2QWsRaWsrLvoiVmGgK0aeU_4YJ2Yq4tHyzll3RyzFdGjQup_1wJdd1gui-b9NExHyqnB7iLdkEJotJ0PFP6NpbuYpyWAYP_542SF40fd7wXMB9ALR03HTRznPZukkntjppsJDkvcTZq6pOwZQWW8XNUgk5H3gBHlc1B1NBoXRMZO56EKfe2Z5UaSnIVSADoxvRaXf1AFZ-bweipPV_66V8jcOzIZCyvQax_R7tBJbDCZ0038ynHD3Rp_Z6A5S8vMq77KplW6FD7-r9DTtlcb2fhRrDPSutEyPzldE9JicLIidf1W50kB6MO5GMym486CrW_tGjLLkDwlZqMxDa4Pi4u7Kojhzo1TBfmlcx9yWj0dJGMFiNQ2WZI_NuRvcOS2XIBpmKiMsdq0FyS25DdHIKaotZMJCcr_QF/s1600/IMG_2841.jpg",
                servings: "Snacks",
                time: "5:30 To 6:30 PM",
            },
            dinner: {
                name: "Mix Veg, Sambhar ",
                daily:"Salad Achar Chapati, Rice",
                image: "https://media.cntraveller.in/wp-content/uploads/2020/05/homemade-paneer-recipes-1366x768.jpg",
                servings: "Dinner",
                time: "7:30 To 9:30 PM",
            },
        },
        Saturday: {
            breakfast: {
                name: "Dosa,Sambhar,Chatni, Sprouts",
                daily:"Bread, Butter, Jam, Milk, Tea ☕",
                image: "https://i.pinimg.com/originals/61/23/74/612374b37b28b6790d6fbcb2ab5e8f82.jpg",
                servings: "Breakfast",
                time: "7:30 To 9:30 AM",
            },
            lunch: {
                name: "Rajma Cury, Lemon Rice,Dal Fry, Chapati, Lassi",
                daily:"Salad, Achar, Papad",
                image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/One_Pot_Punjabi_Rajma_Masala_Recipe_In_Electric_Pressure_Cooker-1.jpg",
                servings: "Lunch",
                time: "12:00 To 2:00 PM",
            },
            snacks: {
                name: "Samosa/Bread Pakoda, Tea ☕",
                image: "https://th.bing.com/th/id/R.4870bcda87407c7b3eea0bf599809f86?rik=rSFG%2bJJgP4MVpw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31900000%2fOreo-oreo-31905998-2000-1317.jpg&ehk=UJuj4Krp91jPCFOVSHOAAsQCg0NnGNJWU1eFpJIzL50%3d&risl=&pid=ImgRaw&r=0",
                servings: "Snacks",
                time: "5:30 To 6:30 PM",
            },
            dinner: {
                name: "Methi Matar, Chana Dal",
                daily:"Salad Achar Chapati,Rice",
                image: "https://th.bing.com/th/id/OIP.ETYhCy8BagU3WMLzbpwo4QHaE7?rs=1&pid=ImgDetMain",
                servings: "Dinner",
                time: "7:30 To 9:30 PM",
            },
        },
    };


    // const today = new Date().toLocaleString("en-us", { weekday: "lowercase" });

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date().getDay(); 
    const currentDay = days[today];

    displayMenu(currentDay);

    displayGreeting();

    function displayMenu(day) {
        const menuContainer = document.getElementById("menu");
        const dayMenu = menuData[day];

        if (dayMenu) {
            Object.keys(dayMenu).forEach(meal => {
                const mealData = dayMenu[meal];
                const menuItem = createMenuItem(meal, mealData);
                menuContainer.appendChild(menuItem);
            });
        } else {
            menuContainer.innerHTML = "<p>Menu not available for today.</p>";
        }
    }

    function createMenuItem(meal, data) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
    
        const image = document.createElement("img");
        image.src = data.image;
        image.alt = `${meal} image`;
    
        const heading = document.createElement("h2");
        heading.textContent = data.name;
    
        const info = document.createElement("p");
        info.innerHTML = `<strong>Meal:</strong> ${data.servings}<br><strong>Time:</strong> ${data.time}`;
        
        if (data.daily) {
            info.innerHTML += `<br><strong>Daily Items:</strong> ${data.daily}`;
        }
    
        menuItem.appendChild(image);
        menuItem.appendChild(heading);
        menuItem.appendChild(info);
    
        return menuItem;
    }
    

    function displayGreeting() {
        const greetingContainer = document.getElementById("greeting");
        const currentHour = new Date().getHours();

        let greeting = "";
        if (currentHour >= 5 && currentHour < 12) {
            greeting = "Good Morning !";
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = "Good Afternoon !";
        } else {
            greeting = "Good Evening !";
        }

        greetingContainer.textContent = greeting;
    }
});
