import React, { useEffect, useMemo, useState } from "react";

/*
  Mini Project 2: Italian Food Cards
 */
const fetchFoodsInternal = () =>
  new Promise((resolve) => {
    // Simulate async API delay
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Pizza Margherita",
          category: "Pizza",
          price: 14.5,
          description: "Classic pizza with tomato, mozzarella, and basil.",
          recipe:
            "Spread tomato sauce, add mozzarella and basil, bake at high heat until crust is crisp.",
          image:
            "https://www.scattidigusto.it/wp-content/uploads/2018/03/pizza-margherita-originale-Scatti-di-Gusto-1568x821.jpg",
        },
        {
          id: 2,
          title: "Spaghetti Carbonara",
          category: "Pasta",
          price: 16.0,
          description: "Spaghetti with egg, pecorino, guanciale, and pepper.",
          recipe:
            "Cook pasta, crisp guanciale, mix eggs + pecorino, combine off-heat with pasta water.",
          image:
            "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=900&q=80",
        },
        {
          id: 3,
          title: "Lasagna alla Bolognese",
          category: "Pasta",
          price: 18.5,
          description: "Layered pasta with ragù, béchamel, and parmesan.",
          recipe:
            "Layer sheets with ragù and béchamel, top with parmesan, bake until golden.",
          image:
            "https://tse2.mm.bing.net/th/id/OIP.VUWBu4RyWeTdTKZHg6Ls5gHaE6?pid=Api&P=0&h=180",
        },
        {
          id: 4,
          title: "Risotto ai Funghi",
          category: "Rice",
          price: 17.0,
          description: "Creamy risotto with mushrooms and parmesan.",
          recipe:
            "Toast rice, add stock gradually, sauté mushrooms separately, finish with butter and cheese.",
          image:
            "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
        },
        {
          id: 5,
          title: "Gnocchi al Pesto",
          category: "Pasta",
          price: 15.5,
          description: "Potato gnocchi tossed in fresh basil pesto.",
          recipe:
            "Boil gnocchi until floating, toss with pesto and a splash of pasta water.",
          image:
            "https://receptvadasz.hu/wp-content/uploads/2021/01/bazsalikomos-gnocchi-gnocchi-al-pesto-genovese.jpg",
        },
        {
          id: 6,
          title: "Trofie al Pesto",
          category: "Pasta",
          price: 15.0,
          description: "Silky pasta with butter and parmesan sauce.",
          recipe:
            "Cook trofie, emulsify butter + parmesan + pasta water, toss until creamy.",
          image:
            "https://wineandtravelitaly.com/wp-content/uploads/2021/07/italian-recipe-recette-italienne-trofie-al-pesto-1.jpg",
        },
        {
          id: 7,
          title: "Minestrone Soup",
          category: "Soup",
          price: 12.0,
          description: "Hearty vegetable soup with beans and pasta.",
          recipe:
            "Simmer vegetables, beans, and stock; add small pasta; finish with olive oil.",
          image:
            "https://tse1.mm.bing.net/th/id/OIP.mbEHghD5owlpUoleQmL_qwHaDi?pid=Api&P=0&h=180",
        },
        {
          id: 8,
          title: "Bruschetta",
          category: "Appetizer",
          price: 9.5,
          description: "Toasted bread with tomatoes, garlic, basil, and olive oil.",
          recipe:
            "Toast bread, rub with garlic, top with chopped tomatoes, basil, and olive oil.",
          image:
            "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=80",
        },
        {
          id: 9,
          title: "Caprese Salad",
          category: "Salad",
          price: 11.0,
          description: "Tomato, mozzarella, basil, olive oil, and balsamic.",
          recipe:
            "Layer tomato and mozzarella slices, add basil, drizzle olive oil and balsamic.",
          image:
            "https://tse3.mm.bing.net/th/id/OIP.M73_DLR1jfB6Wkou_B8gkQHaLH?pid=Api&P=0&h=180",
        },
        {
          id: 10,
          title: "Fiorentina Steak",
          category: "Meat",
          price: 24.0,
          description: "Braised veal shanks with vegetables and wine.",
          recipe:
            "Brown veal shanks, braise with mirepoix, wine, and stock until tender.",
          image:
            "https://tse4.mm.bing.net/th/id/OIP.cBH5QFMdqDc2DcvVmkGBigHaE7?pid=Api&P=0&h=180",
        },
        {
          id: 11,
          title: "Cotoletta alla Milanese",
          category: "Meat",
          price: 19.0,
          description: "Breaded veal cutlet baked with tomato sauce and mozzarella.",
          recipe:
            "Bread and fry veal cutlets, top with sauce and cheese, bake until melted.",
          image:
            "https://www.authentico-ita.org/wp-content/uploads/2019/01/authentico-app-articolo-cotoletta-milanese-ricetta-originale.jpg",
        },
        {
          id: 12,
          title: "Arancini",
          category: "Appetizer",
          price: 10.5,
          description: "Stuffed and fried risotto balls.",
          recipe:
            "Form rice balls with filling, bread them, and deep-fry until golden.",
          image:
            "https://www.italianstylecooking.net/wp-content/uploads/2020/02/Arancini.jpg",
        },
        {
          id: 13,
          title: "Tiramisu",
          category: "Dessert",
          price: 8.5,
          description: "Coffee-soaked ladyfingers with mascarpone cream.",
          recipe:
            "Layer coffee-dipped biscuits with mascarpone cream; chill and dust cocoa.",
          image:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80",
        },
        {
          id: 14,
          title: "Sorbetto al Limone",
          category: "Dessert",
          price: 7.5,
          description: "Creamy set dessert served with lemon sauce.",
          recipe:
            "Heat cream, sugar, vanilla; add gelatin; set in molds; serve with lemon sauce.",
          image:
            "https://tse3.mm.bing.net/th/id/OIP.Sa1y87oa7j93QGq3YU7GvwHaEK?pid=Api&P=0&h=180",
        },
        {
          id: 15,
          title: "Homemade Gelato",
          category: "Dessert",
          price: 6.0,
          description: "Italian-style dense and creamy ice cream.",
          recipe:
            "Churn milk, sugar, and flavorings slowly for dense texture; freeze and serve.",
          image:
            "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80",
        },
      ]);
    }, 300);
  });

export default function MiniProject2() {
  // Main items state (API + user-added)
  const [foods, setFoods] = useState([]);

  // UI states for filter/search/sort
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title-asc");

  // Track which cards show recipe text
  const [openRecipes, setOpenRecipes] = useState(new Set());

  // Form state for adding a new card
  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    recipe: "",
    image: "",
  });

  // Load internal API data once
  useEffect(() => {
    fetchFoodsInternal().then((data) => setFoods(data));
  }, []);

  // Build category list dynamically from items
  const categories = useMemo(() => {
    const unique = [...new Set(foods.map((f) => f.category).filter(Boolean))];
    return ["All", ...unique];
  }, [foods]);

  // Apply category filter + search + sorting
  const visibleFoods = useMemo(() => {
    let list = [...foods];

    // Filter by category
    if (selectedCategory !== "All") {
      list = list.filter((item) => item.category === selectedCategory);
    }

    // Search by title or description
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    // Sort results
    if (sortBy === "title-asc") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "title-desc") {
      list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [foods, selectedCategory, searchTerm, sortBy]);

  // Toggle recipe visibility per card
  const toggleRecipe = (id) => {
    setOpenRecipes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Keep form inputs in sync
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new card from form data
  const handleAddFood = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.title || !form.category || !form.price || !form.description || !form.recipe) {
      alert("Please fill all required fields.");
      return;
    }

    // Create new item object
    const newItem = {
      id: Date.now(),
      title: form.title.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      description: form.description.trim(),
      recipe: form.recipe.trim(),
      image:
        form.image.trim() ||
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    };

    // Add to top of list
    setFoods((prev) => [newItem, ...prev]);

    // Reset form
    setForm({
      title: "",
      category: "",
      price: "",
      description: "",
      recipe: "",
      image: "",
    });
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">Italian Best Foods</h2>

      {/* Controls row: category filter, search, sorting */}
      <div className="row g-2 mb-4">
        <div className="col-12 col-md-4">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search item..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-12 col-md-4">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title-asc">Sort: Title A-Z</option>
            <option value="title-desc">Sort: Title Z-A</option>
            <option value="price-asc">Sort: Price Low-High</option>
            <option value="price-desc">Sort: Price High-Low</option>
          </select>
        </div>
      </div>

      {/* Add-item form */}
      <form className="card card-body mb-4" onSubmit={handleAddFood}>
        <h5 className="mb-3">Add Your Own Dish</h5>
        <div className="row g-2">
          <div className="col-md-4">
            <input
              name="title"
              className="form-control"
              placeholder="Title *"
              value={form.title}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-md-3">
            <input
              name="category"
              className="form-control"
              placeholder="Category *"
              value={form.category}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-md-2">
            <input
              name="price"
              type="number"
              step="0.01"
              className="form-control"
              placeholder="Price *"
              value={form.price}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-md-3">
            <input
              name="image"
              className="form-control"
              placeholder="Image URL (optional)"
              value={form.image}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="description"
              className="form-control"
              placeholder="Description *"
              value={form.description}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="recipe"
              className="form-control"
              placeholder="Recipe *"
              value={form.recipe}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-success">
            Add Food
          </button>
        </div>
      </form>

      {/* Bootstrap cards grid */}
      <div className="row g-4">
        {visibleFoods.map((item) => (
          <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="badge text-bg-secondary align-self-start">{item.category}</p>
                <p className="fw-bold mb-2">${item.price.toFixed(2)}</p>
                <p className="card-text">{item.description}</p>

                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => toggleRecipe(item.id)}
                >
                  Recipe
                </button>

                {openRecipes.has(item.id) && (
                  <div className="alert alert-light border mt-2 mb-0">
                    <strong>Recipe:</strong> {item.recipe}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}