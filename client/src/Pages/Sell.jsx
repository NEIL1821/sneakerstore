import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Row , Col, Container} from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { getUserById } from '../lib/api';
import SneakerModal from '../Components/Modals/SneakerModal';

const SellPage = () => {
  const [ sneakers, setSneakers ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ filtered , setFiltered ] = useState([]);
  //for user data
  const [ userData, setData ] = useState({});
  const { auth } = useAuth();
  const [ modalShow, setModalShow ] = useState(false);
  const [ modalVals, setModalVals ] = useState({});
   
  useEffect(() => {
      getSneakers();
  }, [])

  //dont think we need this here anymore , as we can just use auth.userId
  useEffect(() => {
    async function fetchData() {
      const userDataResponse =  await getUserById(auth.userId)
      setData(userDataResponse);
    }
    fetchData();
  }, [auth.userId]);

  const getSneakers = async () => {
    try {
      await axios.get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100`)
      .then(res => setSneakers(res.data.results));
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    console.log(searchTerm.split(' ')) //Idea if we want to search with spacing between words
    if (searchTerm.length > 0 ) {
      let filter = sneakers.filter(
        (shoe) =>
          shoe.title.toLowerCase().includes(searchTerm) ||
          shoe.year.toString().toLowerCase().includes(searchTerm) ||
          shoe.title.includes(searchTerm) ||
          shoe.year.toString().includes(searchTerm)
      );
      setFiltered(filter);
      // console.log(filter)
    }
    else if(searchTerm.length === 0) {setFiltered(sneakers)}
  }
  

  //inside the modal i will have a button that will make a post/put to api/users/?userId=userData.auth./addSneaker/ reqest with object {sneaker Object}

  const handleModal = (item) => {
    setModalVals(item);
    setModalShow(true);
  }

  //QUICK NOTE : remember to change the use of brand and name to item.title is much more detailed 
  // i.e. contains the brand and model and the year

  return (
    <Container>
      <div className="search">
        <input onChange={handleChange} className="search__input mb-2" type="text" name="search" placeholder="Search..." />
        <div className="heading__impact mb-3">Select a product</div>
      </div>
      <Row>
      {filtered ? (
          filtered.map((item) => (
            <Col sm={3} className="shoe" >
              <div className="shoe__content" key={item.id}>
                <img className="shoe__img mb-2" src={item.media.smallImageUrl} alt="shoe" />
                <div className="bg-grey">
                  <p className="shoe__title mb-1">
                    {item.title} <br /> ({item.year})
                  </p>
                  <p className="shoe__price">
                    Retail Price: &nbsp;<span>${item.retailPrice}</span>
                  </p>
                  <p className="shoe__sellar">
                    Seller: {"shoe.sellar"}&nbsp;rating("shoe.sellarRating")
                  </p>
                  <p className="shoe__views mb-1">Views: {"shoe.views"}</p>
                  <p className="shoe__date">Date Listed: {"shoe.dateListed"}</p>
                  <div className="space-between clamp-1">
                    {/* <Link to={"/product/"+item.id}> */}
                      <button className="shoe__btn" onClick={()=> handleModal(item)}>Sell</button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
         </Col>
          ))
        ) : (
          <div className="ml-5"> 
            
          </div>
        )}
      </Row>
      <SneakerModal
          username={userData.name}
          userid={auth.userId}
          sneaker={modalVals}
          show={modalShow}
          onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default SellPage;
