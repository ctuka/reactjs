

export default function Parent({children}) {
    console.log(children);

  return (
    <div><header>

         <h1>PARENT</h1>
    </header>
     
        <p>{children}</p>

        <footer>Footer &copy; 2024</footer>
    </div>
  )
}
