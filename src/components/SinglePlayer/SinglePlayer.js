
import './SinglePlayer.css';
const SinglePlayer = ({ player, order, setOrder}) => {
  const { name, price, image, phone, company } = player;
    const handalOrder = () =>{
        const info = {
          name,
          price,
          image,
          phone,
          company,
          quantity: 1
        };
        if(order){
            setOrder([...order, info]);
            return;
        }
        else{
            setOrder([info])
            return;
        }
    }
    
  return (
    <div>
      <div className="card w-full h-[36rem] bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">Details</div>
          </h2>
          <p>Price: {price}</p>
          <p>Phone: {phone}</p>
          <p>Company: {company}</p>
          <div className="card-actions justify-start">
            <div
              onClick={handalOrder}
              className="btn btn-outline btn-primary btn-sm font-bold"
            >
              Add To Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;