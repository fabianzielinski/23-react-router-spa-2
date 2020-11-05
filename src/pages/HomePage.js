import React from 'react';
import Article from '../components/Article'


const articles = [
    {
        id: 1,
        title: "Czym jest Teoria Strun",
        author: "Jan Nowak",
        text: "Ullamco occaecat cupidatat ullamco culpa adipisicing minim ullamco laboris minim do esse ad laboris. Ex aute sint quis excepteur consectetur do dolore quis ad magna dolore. Duis quis aute quis consectetur."
    },
    {
        id: 2,
        title: "Historia w Trylogii zaklęta",
        author: "Stefan Sienkiewicz",
        text: "Eiusmod elit est duis eu laborum aliqua sunt ex in dolor laborum laborum. Incididunt nostrud exercitation minim minim aliquip. Aute mollit tempor pariatur non dolore. Voluptate amet dolor reprehenderit amet sunt velit duis ut non nulla velit aliquip eiusmod. Reprehenderit velit do commodo pariatur laborum quis in. Consequat nulla labore Lorem sit irure."
    },
    {
        id: 3,
        title: "Grzyby lasów Polski",
        author: "Jan Koźlak",
        text: "Nisi reprehenderit eu laborum sint reprehenderit non duis minim pariatur labore ea qui irure sit. Nisi dolore occaecat eiusmod sit est. Voluptate aliqua commodo sunt commodo aliqua dolor in elit."
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">{artList}</div>
     );
}
 
export default HomePage;