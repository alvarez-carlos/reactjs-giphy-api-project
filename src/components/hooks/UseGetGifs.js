import UseFetch from './UseFetch'

const UseGetGifs = ({ url }) => {
    
  const { isLoading, data: gifs } = UseFetch({ url: url });

  if (isLoading) {
    return (
      <section className="App">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="App">
      <ul>
        {gifs.map((gif) => {
          return (
            <li key={gif.id}>
              <div>
                <img src={gif.url} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UseGetGifs;
