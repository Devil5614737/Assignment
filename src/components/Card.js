import { useSelector } from "react-redux";

export const Card = ({ showCard, setShowCard }) => {
  const state = useSelector((state) => state.fetchTheSingleUser);

  const { loading, user } = state;

  return (
    showCard && (
      <main
        style={{
          display: "grid",
          placeContent: "center",
          alignContent: "center",
          height: "80vh",
          width: "100vw",
     
        }}
      >
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="card p-3" style={{ width: "18rem" }}>
            <img
              style={{ width: 70, height: 70, borderRadius: "100%" }}
              src={user && user.avatar}
              className="card-img-top m-auto"
              alt="user"
            />
            <div className="card-body text-center">
              <p className="card-text">First Name: {user && user.first_name}</p>
              <p className="card-text">First Name: {user && user.last_name}</p>
              <p className="card-text">Email:{user && user.email}</p>

              <a
                onClick={() => setShowCard(false)}
                href="#!"
                className="btn btn-danger btn-sm"
              >
                close
              </a>
            </div>
          </div>
        )}
      </main>
    )
  );
};
