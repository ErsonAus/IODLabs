import React from 'react'; // import React for JSX support

// Array of cats with unique ids, latin names, and image URLs
const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus',  image: 'https://img.freepik.com/premium-photo/cheetah-acinonyx-jubatus_729113-1957.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor',  image: 'https://tse4.mm.bing.net/th/id/OIP.XbmTZRpD25qNdPjNxJJvkwHaE8?pid=Api&P=0&h=180' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca',  image: 'https://st.depositphotos.com/1007965/1763/i/950/depositphotos_17633237-stock-photo-jaguar-panthera-onca.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus',  image: 'https://c8.alamy.com/comp/PMJCXM/close-up-portrait-of-persian-leopard-panthera-pardus-tulliana-panthera-pardus-ciscaucasica-panthera-pardus-saxicolor-native-to-PMJCXM.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo',  image: 'https://c8.alamy.com/comp/2EXX0H3/adult-male-lion-pantera-leo-walking-through-the-open-grasslands-of-the-masai-mara-kenya-side-view-2EXX0H3.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia',  image: 'https://c8.alamy.com/comp/2K91JA6/the-snow-leopard-panthera-uncia-2K91JA6.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris',  image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bengal-tiger-panthera-tigris-tigris-elementalimaging.jpg' },
];

// Component that renders a single cat item
function SingleCat({ cat }) {
  return (
    <li className="big-cat-item">
      <img src={cat.image} alt={cat.name} className="big-cat-image" style={{width:100,height:100}}/>
      <div className="big-cat-info">
        <h3>{cat.name}</h3>
        <p><em>{cat.latinName}</em></p>
      </div>
    </li>
  );
}

// Main component that renders the styled list of cats
export default function BigCats() {
  return (
    <section className="big-cats">
      <h2>Big Cats</h2>
      <ul className="big-cats-list">
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </section>
  );
}