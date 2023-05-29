import { useSelector } from "react-redux";


const UserView = () => {
  const { loading, user, error } = useSelector((state) => state.user);
  return (
    <div>
      <h1>List of Users</h1>
      <br />
      {loading ? <div>Loading....</div> : null}
      {!loading && error ? <div>Error : {error}</div> : null}
      {!loading && !error && user && user.length > 0 ? (
        <ul>
          {user.map((data, i) => <li key={i}>{data}</li>)}
        </ul>
      ) : <>
        {!loading && !error &&
          <div> No data found</div>}
      </>
      }
    </div >
  )
}

export default UserView