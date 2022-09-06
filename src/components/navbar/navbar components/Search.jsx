import "./search.css";
function Search(props) {
  // let [visible, setVisible] = useState(false);
  return (
    <div className="search">
      <div className="search-box">
        <input
          type="text"
          className={`input-search ${props.color}`}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
export default Search;
