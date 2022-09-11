import "./suggestions.css";

const Suggestions = () => {
  return (
    <div className="Suggestions">
      <div className="suggestCard">
        <img
          src="https://images.generated.photos/oNRbiEsTL4WTjRr31UEMB-dpLG5KzpqCJJWYCdZL8D8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvOWQ4MGNj/NjgtYTVlOC00YjQ4/LWE4MGEtOTQzNzUy/ZjEwZjA5LmpwZw.jpg"
          alt=""
          className="suggestImg"
        />
        <h2>Leon's suggest</h2>
        <p>
          "I work in a very demanding job and always find the time to do the
          right thing. If it weren't for "NON" I wouldn't have been able to find
          the right volunteering for me and fulfill my desires."
        </p>
        <p style={{ color: "blue" }}>1.7.2021</p>
      </div>
      <div className="suggestCard">
        <img
          src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg"
          alt=""
          className="suggestImg"
        />
        <h2>Dana's suggest</h2>
        <p>
          "I've always wanted to volunteer, but it's never been easier. The
          company helped me find the right volunteering for me in the most
          convenient place and time! Highly recommended."
        </p>
        <p style={{ color: "blue" }}>2.2.2022</p>
      </div>
      <div className="suggestCard">
        <img
          src="https://images.generated.photos/aawIDxj6FrYPJJR7_o3gTuhN6XsXaW6ni04dZwQuHLk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMjkzM2M3/Y2QtMWQzNi00ZmMx/LTlhNmMtYjMyNGQx/ZThlYTE4LmpwZw.jpg"
          alt=""
          className="suggestImg"
        />
        <h2>Goni's suggest</h2>
        <p>
          "When the realization comes how much good helping others and
          volunteering can do, the decision to volunteer also comes. At the
          moment of the decision it is very unclear and understandable where to
          volunteer, and "NON" make it simple."
        </p>
        <p style={{ color: "blue" }}>5.12.2021</p>
      </div>
    </div>
  );
};
export default Suggestions;
