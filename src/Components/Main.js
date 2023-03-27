//declre variable
const name = "Dinuka";
const address = "kegalle";

//declare object
const Objct = {
  name: `${name}`,
  address: `${address}`,
};

//create main function
function Main(props) {
  return (
    <div>
      <header>
        <body>Sri Lanka's Largest Online chocolate Shopping Store.</body>

        {/* define object name this line */}

        <p>{Objct.name}</p>
      </header>
    </div>
  );
}

export default Main;
