import React, { useState } from 'react'; // import React and useState hook for state management

// Array of cats with unique ids, latin names, and image URLs
const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://img.freepik.com/premium-photo/cheetah-acinonyx-jubatus_729113-1957.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://tse4.mm.bing.net/th/id/OIP.XbmTZRpD25qNdPjNxJJvkwHaE8?pid=Api&P=0&h=180' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://st.depositphotos.com/1007965/1763/i/950/depositphotos_17633237-stock-photo-jaguar-panthera-onca.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://c8.alamy.com/comp/PMJCXM/close-up-portrait-of-persian-leopard-panthera-pardus-tulliana-panthera-pardus-ciscaucasica-panthera-pardus-saxicolor-native-to-PMJCXM.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://c8.alamy.com/comp/2EXX0H3/adult-male-lion-pantera-leo-walking-through-the-open-grasslands-of-the-masai-mara-kenya-side-view-2EXX0H3.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://c8.alamy.com/comp/2K91JA6/the-snow-leopard-panthera-uncia-2K91JA6.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bengal-tiger-panthera-tigris-tigris-elementalimaging.jpg' },
];

// Component that renders a single cat item
function SingleCat({ cat }) {
  return (
    <li className="big-cat-item">
      {/* Display the cat image with fixed dimensions */}
      <img src={cat.image} alt={cat.name} className="big-cat-image" style={{ width: 100, height: 100 }} />
      <div className="big-cat-info">
        {/* Display the common name and latin name */}
        <h3>{cat.name}</h3>
        <p><em>{cat.latinName}</em></p>
      </div>
    </li>
  );
}

// Main component that renders the styled list of cats with sort/filter controls
export default function BigCats() {

  // State to track the currently displayed list of cats (initialised to full list)
  const [displayedCats, setDisplayedCats] = useState(cats);

  // State to track whether the list is currently sorted in reverse
  const [isReversed, setIsReversed] = useState(false);

  // Handler: sort the displayed list alphabetically by name (A → Z)
  const handleSortAZ = () => {
    // Create a sorted copy so we don't mutate state directly
    const sorted = [...displayedCats].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayedCats(sorted);
    setIsReversed(false); // reset reverse flag after a fresh sort
  };

  // Handler: reverse the current order of the displayed list
  const handleReverse = () => {
    // Spread into a new array before reversing to avoid mutating state
    const reversed = [...displayedCats].reverse();
    setDisplayedCats(reversed);
    setIsReversed((prev) => !prev); // toggle the reverse flag
  };

  // Handler: filter the list to show only Panthera family cats
  // A cat belongs to Panthera if its latin name starts with 'Panthera'
  const handleFilterPanthera = () => {
    const pantheraOnly = cats.filter((cat) =>
      cat.latinName.startsWith('Panthera')
    );
    setDisplayedCats(pantheraOnly);
    setIsReversed(false); // reset reverse flag when filtering
  };

  // Handler: reset the list back to the original full unmodified array
  const handleReset = () => {
    setDisplayedCats(cats);
    setIsReversed(false); // reset reverse flag on full reset
  };

  return (
    <section className="big-cats">
      <h2>Big Cats</h2>

      {/* Control buttons for sort, reverse, filter and reset actions */}
      <div className="big-cats-controls" style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>

        {/* Sort alphabetically A to Z */}
        <button onClick={handleSortAZ}>Sort A → Z</button>

        {/* Reverse the current list order */}
        <button onClick={handleReverse}>
          {/* Label changes based on current direction */}
          {isReversed ? 'Reverse (Z → A)' : 'Reverse (A → Z)'}
        </button>

        {/* Filter to show only Panthera genus cats */}
        <button onClick={handleFilterPanthera}>Panthera Only</button>

        {/* Reset to show the full original list */}
        <button onClick={handleReset}>Reset List</button>

      </div>

      {/* Display count of currently shown cats */}
      <p>Showing {displayedCats.length} of {cats.length} cats</p>

      {/* Render the list using the SingleCat component for each entry */}
      <ul className="big-cats-list">
        {displayedCats.map((cat) => (
          // Use cat.id as the unique key for each list item
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </section>
  );
}