

const Watch = ({watch}) => {
    const {name, price}=watch;
   // console.log(watch)
    return (
        <div>
            <h2>Watches-name : {name} </h2>
            <p>Watches-price :{price} </p>
        </div>
    );
};

export default Watch;