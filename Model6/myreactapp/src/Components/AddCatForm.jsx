import React, { useState } from 'react'; // import React and useState hook for state management

// Array of cats with unique ids, latin names, and image URLs
const initialCats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://img.freepik.com/premium-photo/cheetah-acinonyx-jubatus_729113-1957.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://tse4.mm.bing.net/th/id/OIP.XbmTZRpD25qNdPjNxJJvkwHaE8?pid=Api&P=0&h=180' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://st.depositphotos.com/1007965/1763/i/950/depositphotos_17633237-stock-photo-jaguar-panthera-onca.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://c8.alamy.com/comp/PMJCXM/close-up-portrait-of-persian-leopard-panthera-pardus-tulliana-panthera-pardus-ciscaucasica-panthera-pardus-saxicolor-native-to-PMJCXM.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://c8.alamy.com/comp/2EXX0H3/adult-male-lion-pantera-leo-walking-through-the-open-grasslands-of-the-masai-mara-kenya-side-view-2EXX0H3.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://c8.alamy.com/comp/2K91JA6/the-snow-leopard-panthera-uncia-2K91JA6.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bengal-tiger-panthera-tigris-tigris-elementalimaging.jpg' },
];

// ─────────────────────────────────────────────
// AddCatForm Component
// Renders a controlled form to capture details for a new cat.
// Props:
//   onAddCat – callback invoked with the new cat object on submit
// ─────────────────────────────────────────────
function AddCatForm({ onAddCat }) {

  // Controlled state for each form field, initialised to empty strings
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  // State to hold any validation error messages
  const [errors, setErrors] = useState({});

  // Validate form fields before submission
  // Returns an object whose keys are field names and values are error messages.
  // An empty object means the form is valid.
  const validate = () => {
    const newErrors = {};

    // Name is required
    if (!name.trim()) newErrors.name = 'Common name is required.';

    // Latin name is required
    if (!latinName.trim()) newErrors.latinName = 'Latin name is required.';

    // Image URL is required and must look like a URL
    if (!image.trim()) {
      newErrors.image = 'Image URL is required.';
    } else if (!/^https?:\/\/.+/.test(image.trim())) {
      newErrors.image = 'Image must be a valid URL starting with http:// or https://';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent the default browser form submission (page reload)
    e.preventDefault();

    // Run validation; if there are errors, update error state and stop
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build a new cat object with a unique id based on current timestamp
    const newCat = {
      id: Date.now(),        // unique numeric id
      name: name.trim(),
      latinName: latinName.trim(),
      image: image.trim(),
    };

    // Pass the new cat up to the parent component via the callback prop
    onAddCat(newCat);

    // Reset all form fields and clear any errors after successful submission
    setName('');
    setLatinName('');
    setImage('');
    setErrors({});
  };

  return (
    // Form element – onSubmit handled by handleSubmit above
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        maxWidth: '400px',
        marginBottom: '1.5rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#8df70b',
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem' }}>Add a New Big Cat</h3>

      {/* ── Common Name field ── */}
      <label htmlFor="cat-name">Common Name</label>
      <input
        id="cat-name"
        type="text"
        placeholder="Name of the big cat"
        value={name}                          // controlled: value tied to state
        onChange={(e) => setName(e.target.value)} // update state on every keystroke
      />
      {/* Show validation error for name if present */}
      {errors.name && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.name}</span>}

      {/* ── Latin Name field ── */}
      <label htmlFor="cat-latin">Latin Name</label>
      <input
        id="cat-latin"
        type="text"
        placeholder="Latin name of the big cat"
        value={latinName}                              // controlled
        onChange={(e) => setLatinName(e.target.value)} // update state on every keystroke
      />
      {/* Show validation error for latinName if present */}
      {errors.latinName && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.latinName}</span>}

      {/* ── Image URL field ── */}
      <label htmlFor="cat-image">Image URL</label>
      <input
        id="cat-image"
        type="text"
        placeholder="Image URL of the big cat"
        value={image}                              // controlled
        onChange={(e) => setImage(e.target.value)} // update state on every keystroke
      />
      {/* Show validation error for image if present */}
      {errors.image && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.image}</span>}

      {/* ── Submit button ── */}
      <button
        type="submit"
        style={{ marginTop: '0.5rem', padding: '0.4rem 1rem', cursor: 'pointer' }}
      >
        Add Cat
      </button>
    </form>
  );
}

// ─────────────────────────────────────────────
// SingleCat Component
// Renders a single cat list item including a Delete link.
// Props:
//   cat      – the cat object to display
//   onDelete – callback invoked with cat.id when the delete link is clicked
// ─────────────────────────────────────────────
function SingleCat({ cat, onDelete }) {
  return (
    <li
      className="big-cat-item"
      style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}
    >
      {/* Display the cat image with fixed dimensions */}
      <img
        src={cat.image}
        alt={cat.name}
        className="big-cat-image"
        style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '4px' }}
      />

      {/* Cat name and latin name */}
      <div className="big-cat-info" style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 0.25rem' }}>{cat.name}</h3>
        <p style={{ margin: 0 }}><em>{cat.latinName}</em></p>
      </div>

      {/* Delete link – calls onDelete with this cat's id when clicked */}
      <a
        href="#delete"                          // href="#delete" keeps it semantic but prevents navigation
        onClick={(e) => {
          e.preventDefault();                   // prevent the default anchor jump behaviour
          onDelete(cat.id);                     // notify parent to remove this cat
        }}
        style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer', whiteSpace: 'nowrap' }}
        aria-label={`Delete ${cat.name}`}       // accessibility label for screen readers
      >
        Delete
      </a>
    </li>
  );
}

// ─────────────────────────────────────────────
// BigCats (default export) – Main parent component
// Manages the master cat list and passes handlers down to children.
// ─────────────────────────────────────────────
export default function BigCats() {

  // Master list state – initialised from the static initialCats array above.
  // This is the single source of truth; sort/filter work on a derived view.
  const [catList, setCatList] = useState(initialCats);

  // State to track the currently displayed (possibly sorted/filtered) list of cats
  const [displayedCats, setDisplayedCats] = useState(initialCats);

  // State to track whether the displayed list is currently reversed
  const [isReversed, setIsReversed] = useState(false);

  // ── Handler: add a new cat ──────────────────
  // Receives a newCat object from AddCatForm and appends it to both
  // the master list and the currently displayed list.
  const handleAddCat = (newCat) => {
    // Append to the master list so it appears on reset
    const updatedMaster = [...catList, newCat];
    setCatList(updatedMaster);

    // Also append to the displayed list so the user sees it immediately
    setDisplayedCats((prev) => [...prev, newCat]);
  };

  // ── Handler: delete a cat by id ─────────────
  // Removes the cat with the matching id from both state arrays.
  const handleDelete = (id) => {
    // Filter it out of the master list
    const updatedMaster = catList.filter((cat) => cat.id !== id);
    setCatList(updatedMaster);

    // Also filter it out of the displayed list
    setDisplayedCats((prev) => prev.filter((cat) => cat.id !== id));
  };

  // ── Handler: sort A → Z ──────────────────────
  // Sorts the displayed list alphabetically by common name.
  const handleSortAZ = () => {
    // Create a sorted copy so we don't mutate state directly
    const sorted = [...displayedCats].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayedCats(sorted);
    setIsReversed(false); // Reset reverse flag after a fresh sort
  };

  // ── Handler: reverse current order ──────────
  const handleReverse = () => {
    // Spread into a new array before reversing to avoid mutating state
    const reversed = [...displayedCats].reverse();
    setDisplayedCats(reversed);
    setIsReversed((prev) => !prev); // Toggle the reverse flag
  };

  // ── Handler: filter Panthera genus only ─────
  // A cat belongs to Panthera if its latin name starts with 'Panthera'
  const handleFilterPanthera = () => {
    const pantheraOnly = catList.filter((cat) =>
      cat.latinName.startsWith('Panthera')
    );
    setDisplayedCats(pantheraOnly);
    setIsReversed(false); // Reset reverse flag when filtering
  };

  // ── Handler: reset to full unmodified list ───
  const handleReset = () => {
    setDisplayedCats(catList); // Use current master list (may include newly added cats)
    setIsReversed(false);      // Reset reverse flag on full reset
  };

  return (
    <section className="big-cats">
      <h2>Big Cats</h2>

      {/* ── Add Cat Form ──
          Passes the handleAddCat callback so the form can lift state up */}
      <AddCatForm onAddCat={handleAddCat} />

      {/* ── Control buttons for sort, reverse, filter and reset ── */}
      <div
        className="big-cats-controls"
        style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
      >
        {/* Sort alphabetically A to Z */}
        <button onClick={handleSortAZ}>Sort A → Z</button>

        {/* Reverse the current list order; label reflects current direction */}
        <button onClick={handleReverse}>
          {isReversed ? 'Reverse (Z → A)' : 'Reverse (A → Z)'}
        </button>

        {/* Filter to show only Panthera genus cats */}
        <button onClick={handleFilterPanthera}>Panthera Only</button>

        {/* Reset to show the full current master list */}
        <button onClick={handleReset}>Reset List</button>
      </div>

      {/* Display count of currently shown vs total cats */}
      <p>Showing {displayedCats.length} of {catList.length} cats</p>

      {/* Render the list – each SingleCat receives its cat data and the delete handler */}
      <ul className="big-cats-list" style={{ listStyle: 'none', padding: 0 }}>
        {displayedCats.map((cat) => (
          // Use cat.id as the unique React key for efficient reconciliation
          <SingleCat
            key={cat.id}
            cat={cat}
            onDelete={handleDelete} // Pass delete handler down as a prop
          />
        ))}
      </ul>
    </section>
  );
}