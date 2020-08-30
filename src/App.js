import React from 'react';
import './App.css';
import  image1  from './images/image1.png';
import  image2  from './images/image2.png';


function App() {
    return (
        <div className="wrapper">
            <div className='box header'>
                <h1>
                    This is a three columns following responsive web design
         </h1>
            </div>

            <div className='box sidebar'>
                <h2>Gallery <i>X</i></h2>

                 <img className="image" src={image1} alt='image'/>
                <p>Gallery X is an imaginary gallery, created for the purposes of this web typography exercise. If it did exist,
                    it would be dedicated to showcasing type and lettering through the ages. While web typographers work in HTML 
                    and CSS, our craft is built upon the foundation created by letterers, printers, typographers, and type designers
                    who came before us.</p>
            </div>

            <div className='box sidebar2'>
                <h2>Current Exhibition</h2>

                <img className="image" src={image2} alt='image' />

                <p>The Lindisfarne Gospels</p>

                <p>Through April 16, 2017</p>

                <p>Harrington Hall</p>

                <p>The Lindisfarne Gospels is an illuminated manuscript, its pages filled with examples of elaborately and 
                    skillfully hand-rendered patterns and decorations. Produced sometime between 710 and 721, in a monastery 
                    off the coast of Northumberland at Lindisfarne, the manuscript is thought to be the work of a single scribe. 
                    With the original on display in the British Library in London, this travelling exhibit features a facsimile 
                    of the original. It is accompanied by poster-sized, high resolution photographic prints of some of the most 
                    intricate, ornate (original) pages. </p>

            </div>

            <div className='box content'>
                <h2>Coming Soon</h2>

                <p>Filippo Tommaso Marinetti</p>

                <p>Opening January 28, 2017</p>

                <p>Carnegie Gallery</p>

                <p>An Italian poet, editor, art theorist, fascist, and founder of the Futurist movement, Marinetti declared 
                    in his manifesto: “Courage, audacity, and revolt will be the essential elements of our poetry… We will 
                    destroy the museums, libraries, academies of every kind… We affirm that the world’s magnificence has been 
                    enriched by a new beauty: the beauty of speed.” He promoted a new kind of poetry, enhancing the expressive
                    power of his writing with a loose construction of words. Influenced by his experience as a reporter in the 
                    Balkan conflict in 1912–13, much of Marinetti’s work conveyed something of the emotional tone or sensation of war.</p>

            </div>
            <div className='box footer'>
                <h1>
                    This is the footer at the bottom of the columns
         </h1>
            </div>

        </div>

    );
}

export default App;
