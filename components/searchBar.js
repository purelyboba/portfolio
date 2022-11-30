import react, {useState} from "react";

export default function SearchBar({ allPostsData }) {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    if (searchInput.length > 0) {
        allPostsData.filter((post) => {
            return post.title.toLowerCase().includes(searchInput.toLowerCase());
        });
    }

    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleChange} value={searchInput}/>
            
        </div>
    );
}