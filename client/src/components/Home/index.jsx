const Home = (props) => {
  console.log(222222);
  console.log(props);
  console.log(222222);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => props.auth.login()}>Log In</button>
    </div>
  );
};

export default Home;
