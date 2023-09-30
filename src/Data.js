// Importar las imágenes de las consolas de la marca Sony
import image1 from './assets/consolas/PlayStation.png';
import image2 from './assets/consolas/PlayStation2.png';
import image3 from './assets/consolas/PlayStation3.png';
import image4 from './assets/consolas/PlayStation4.jpg';
import image5 from './assets/consolas/PlayStation5.png';

// Importar las imágenes de las consolas de la marca Microsoft
import image6 from './assets/consolas/xbox_01.jpg';
import image7 from './assets/consolas/xbox-360.png';
import image8 from './assets/consolas/xbox-one.png';
import image9 from './assets/consolas/xbox-s.png';
import image10 from './assets/consolas/xbox-x.png';

// Importar las imágenes de los juegos de la marca Sony
import finalFantasy6 from './assets/games/Final-Fantasy-VI.jpg';
import finalFantasy7 from './assets/games/Final-fan-7.jpg';
import dinoCrisis from './assets/games/dino-crisis.jpg';
import MetalGear from './assets/games/metal-gear-solid.jpg';
import residentEvil2 from './assets/games/resident-evil-2.jpg';
import residentevil3 from './assets/games/residentevil3.jpg';

// Crear un objeto de datos que contiene información sobre productos
const data = {
    products: [
        {
            id: 1,
            name: "PlayStation",
            price: 600,
            image: image1,
            marca: "Sony",
            tipo: "Consolas"
        },
        {
            id: 2,
            name: "PlayStation2",
            price: 2500,
            image: image2,
            marca: "Sony",
            tipo: "Consolas"
        },
        {
            id: 3,
            name: "PlayStation3",
            price: 3500,
            image: image3,
            marca: "Sony",
            tipo: "Consolas"
        },
        {
            id: 4,
            name: "PlayStation4",
            price: 7500,
            image: image4,
            marca: "Sony",
            tipo: "Consolas"
        },
        {
            id: 5,
            name: "PlayStation5",
            price: 9000,
            image: image5,
            marca: "Sony",
            tipo: "Consolas"
        },
        {
            id: 6,
            name: "Xbox Clasico",
            price: 650,
            image: image6,
            marca: "Microsoft",
            tipo: "Consolas"
        },
        {
            id: 7,
            name: "Xbox 360",
            price: 3000,
            image: image7,
            marca: "Microsoft",
            tipo: "Consolas"
        },
        {
            id: 8,
            name: "Xbox One",
            price: 4500,
            image: image8,
            marca: "Microsoft",
            tipo: "Consolas"
        },
        {
            id: 9,
            name: "Xbox series X",
            price: 5500,
            image: image9,
            marca: "Microsoft",
            tipo: "Consolas"
        },
        {
            id: 10,
            name: "Xbox series S",
            price: 9000,
            image: image10,
            marca: "Microsoft",
            tipo: "Consolas"
        },
        {
            id: 11,
            name: "Final Fantasy VI",
            price: 200,
            image: finalFantasy6,
            marca: "Sony",
            tipo: "Juegos PS"
        },
        {
            id: 12,
            name: "Final Fantasy VII",
            price: 900,
            image: finalFantasy7,
            marca: "Sony",
            tipo: "Juegos PS"
        },
        {
            id: 13,
            name: "Dino Crisis",
            price: 3000,
            image: dinoCrisis,
            marca: "Sony",
            tipo: "Juegos PS"
        },
        {
            id: 14,
            name: "Metal Gear Solid",
            price: 950,
            image: MetalGear,
            marca: "Sony",
            tipo: "Juegos PS"
        },
        {
            id: 15,
            name: "Resident Evil 2",
            price: 700,
            image: residentEvil2,
            marca: "Sony",
            tipo: "Juegos PS"
        },
        {
            id: 16,
            name: "Resident Evil 3",
            price: 2400,
            image: residentevil3,
            marca: "Sony",
            tipo: "Juegos PS"
        },
        {
            id: 17,
            name: "PS5 colección GOW",
            price: 12000,
            image: 'https://i0.wp.com/senpai.com.mx/wp-content/uploads/2021/09/PS5-GoW-Ragnarok-scaled.jpeg?resize=1536%2C1536&ssl=1',
            marca: "Sony",
            tipo: "Consolas"
        },
        {
            id: 18,
            name: "Xbox S colección Gears 5",
            price: 13000,
            image: 'https://www.muycomputer.com/wp-content/uploads/2019/08/Gears-5-Xbox-One-X-Edici%C3%B3n-Limitada-e1565161784763.jpg',
            marca: "Microsoft",
            tipo: "Consolas"
        },
        {
            id: 19,
            name: "Gear of war 3",
            price: 300,
            image: 'https://www.eltiempo.com/loencontrasteguiasdecompra/_next/image?url=https%3A%2F%2Feltiempo.revoou.com%2Fwp-content%2Fuploads%2F2023%2F07%2FGears-of-War-3.jpg&w=256&q=75',
            marca: "Microsoft",
            tipo: "Juegos Xbox 360"
        },
        {
            id: 20,
            name: "Halo 3",
            price: 350,
            image: 'https://www.eltiempo.com/loencontrasteguiasdecompra/_next/image?url=https%3A%2F%2Feltiempo.revoou.com%2Fwp-content%2Fuploads%2F2023%2F07%2FHalo-3.jpg&w=256&q=75',
            marca: "Microsoft",
            tipo: "Juegos Xbox 360"
        },
        {
            id: 21,
            name: "Forza Motorsport 4",
            price: 700,
            image: 'https://www.eltiempo.com/loencontrasteguiasdecompra/_next/image?url=https%3A%2F%2Feltiempo.revoou.com%2Fwp-content%2Fuploads%2F2023%2F07%2FForza-Motorsport-4.jpg&w=256&q=75',
            marca: "Microsoft",
            tipo: "Juegos Xbox 360"
        },
        {
            id: 22,
            name: "Dragon Ball Z: Budokai Tenkaichi 3",
            price: 450,
            image: 'https://media.vandal.net/i/610x270/11-2007/200711140142_1.jpg',
            marca: "Sony",
            tipo: "Juegos PS2"
        },
        {
            id: 23,
            name: "Grand Theft Auto: San Andreas",
            price: 650,
            image: 'https://media.vandal.net/m/3150/200472123346_1.jpg',
            marca: "Sony",
            tipo: "Juegos PS2"
        },
        {
            id: 24,
            name: "God of War 2: Divine Retribution",
            price: 250,
            image: 'https://media.vandal.net/m/5360/2007511122935_1.jpg',
            marca: "Sony",
            tipo: "Juegos PS2"
        },
        {
            id: 25,
            name: "Call of Duty: Black Ops II ",
            price: 700,
            image: 'https://media.vandal.net/m/14956/20121216112547_1.jpg',
            marca: "Sony",
            tipo: "Juegos PS3"
        },
        {
            id: 26,
            name: "	Read Dead Redemption",
            price: 600,
            image: 'https://media.vandal.net/m/10107/2010121721954_1.jpg',
            marca: "Sony",
            tipo: "Juegos PS3"
        },
        {
            id: 27,
            name: "Uncharted 2: El reino de los ladrones",
            price: 750,
            image: 'https://media.vandal.net/m/8227/2009106115549_1.jpg',
            marca: "Sony",
            tipo: "Juegos PS3"
        },
        {
            id: 28,
            name: "Bloodborne",
            price: 650,
            image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/KKLEVc2SIIgrFVjsZChZJk1d.jpg?w=440&thumb=false',
            marca: "Sony",
            tipo: "Juegos PS4"
        },
        {
            id: 29,
            name: "God of War™ Ragnarök",
            price: 1250,
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg?w=440&thumb=false',
            marca: "Sony",
            tipo: "Juegos PS4"
        },
        {
            id: 30,
            name: "Ghost of Tsushima",
            price: 650,
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/2322/ZSrFeb6XkqKiq2PZKWg20yfe.jpg?w=440&thumb=false',
            marca: "Sony",
            tipo: "Juegos PS4"
        },
        {
            id: 31,
            name: "Marvel's Spider-Man: Miles Morales",
            price: 900,
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg?w=440&thumb=false',
            marca: "Sony",
            tipo: "Juegos PS5"
        },
        {
            id: 32,
            name: "Elden Ring",
            price: 1100,
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg?w=440&thumb=false',
            marca: "Sony",
            tipo: "Juegos PS5"
        },
        {
            id: 33,
            name: "STAR WARS Jedi: Survivor™",
            price: 1250,
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/1016/1d5f3d24208b41ef8ccb1b841fab20c1bc1c26c4f00e19d6.jpg?w=440&thumb=false',
            marca: "Sony",
            tipo: "Juegos PS5"
        },
        {
            id: 34,
            name: "Grand Theft Auto V",
            price: 1300,
            image: 'https://store-images.s-microsoft.com/image/apps.32034.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.9b094362-c51d-49e5-9e92-80710c585fca?q=90&w=177&h=265',
            marca: "Microsoft",
            tipo: "Juegos Xbox One"
        },
        {
            id: 35,
            name: "PAYDAY 3",
            price: 1400,
            image: 'https://store-images.s-microsoft.com/image/apps.63867.14331474685612773.b22fa632-8f0c-4e61-8204-51e0a84888a9.f3be120a-f30e-436f-9161-a7128d46bb9e?q=90&w=336&h=200',
            marca: "Microsoft",
            tipo: "Juegos Xbox One"
        },
        {
            id: 36,
            name: "Mortal Kombat 11",
            price: 1200,
            image: 'https://store-images.s-microsoft.com/image/apps.9688.70804610839547354.8da93c46-fd13-4b16-8ebe-e8e02c53d93e.09c2e91e-28bd-4f6f-bfd6-79d6b241667a?q=90&w=177&h=265',
            marca: "Microsoft",
            tipo: "Juegos Xbox One"
        },
        {
            id: 37,
            name: "EA SPORTS FC™ 24",
            price: 1300,
            image: 'https://store-images.s-microsoft.com/image/apps.11160.14281959400456729.871028c8-df4c-403f-826e-d4deb249dc43.61f71ada-e3f4-4ef3-838c-860738b36983?q=90&w=336&h=200',
            marca: "Microsoft",
            tipo: "Juegos Xbox One Series S"
        },
        {
            id: 38,
            name: "NBA 2K23",
            price: 1300,
            image: 'https://store-images.s-microsoft.com/image/apps.49445.13722204752732146.49bc688a-ed61-4fa1-968a-5a9f09e3bd1c.7a478038-2d00-40aa-a1e7-3a2dab63a8db?q=90&w=177&h=265',
            marca: "Microsoft",
            tipo: "Juegos Xbox One Series S"
        },
        {
            id: 39,
            name: "Starfield",
            price: 1700,
            image: 'https://store-images.s-microsoft.com/image/apps.35187.13567343664224659.1eb6fdf9-8a0b-4344-a135-ab17dfa3c609.c83b6d6a-56c3-4c3f-8b31-456cfb21c3b7?q=90&w=177&h=265',
            marca: "Microsoft",
            tipo: "Juegos Xbox One Series S"
        },
        {
            id: 40,
            name: "Mortal Kombat™ 1",
            price: 1200,
            image: 'https://store-images.s-microsoft.com/image/apps.15385.14007497573636681.4ee0da90-8866-4e78-bc18-31395aa61837.794c9932-4346-4da4-86ed-5e5c1110a544?q=90&w=177&h=265',
            marca: "Microsoft",
            tipo: "Juegos Xbox One Series X"
        },
        {
            id: 41,
            name: "Red Dead Redemption 2",
            price: 1500,
            image: 'https://store-images.s-microsoft.com/image/apps.34695.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.25816f86-f27c-4ade-ae29-222661145f1f?q=90&w=177&h=265',
            marca: "Microsoft",
            tipo: "Juegos Xbox One Series X"
        },
        {
            id: 42,
            name: "Call of Duty®: Modern Warfare® III",
            price: 1400,
            image: 'https://store-images.s-microsoft.com/image/apps.52537.14234064642497534.45fcb45e-13a9-4b8a-b8a6-c7024be18238.307198e6-f7d3-4f38-8633-50483e30f612?q=90&w=177&h=265',
            marca: "Microsoft",
            tipo: "Juegos Xbox One Series X"
        },
        {
            id: 43,
            name: "Asus TUF Gaming F15 (2022)",
            price: 19000,
            image: 'https://m.media-amazon.com/images/I/61QzVOkMSKL._AC_SY450_.jpg',
            marca: "PC",
            tipo: "Laptop gamer"
        },
        {
            id: 44,
            name: "Acer Nitro 5 AN515-58-525P",
            price: 16000,
            image: 'https://m.media-amazon.com/images/I/71ctRE34RuL._AC_SX450_.jpg',
            marca: "PC",
            tipo: "Laptop gamer"
        },
        {
            id: 45,
            name: "Asus G614JI-AS94 ROG Strix G16 (2023) ",
            price: 43000,
            image: 'https://m.media-amazon.com/images/I/71v0BQo8T8L._AC_SY450_.jpg',
            marca: "PC",
            tipo: "Laptop gamer"
        }
    ]
}

export default data;
