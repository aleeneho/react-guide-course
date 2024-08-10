import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function navigatehandler(){
    navigate('/products')
  }
  return (
    <>
    <h1>My Home Page</h1>
      <p>
        Go to <Link to='/products'>the list of products</Link>.
      </p>
      <button onClick={navigatehandler}>Navigate</button>
    </>
  );
}

export default HomePage;
