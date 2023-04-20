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
        <div className="Cover_img">
          <img
            src="https://cdn.shopify.com/s/files/1/1825/7689/collections/vegan-friendly-chocolate-766869_1400x600_crop_center.jpg?v=1672827620"
            alt="Coverimage"
          ></img>
        </div>
      </header>
    </div>
  );
}

export default Main;
