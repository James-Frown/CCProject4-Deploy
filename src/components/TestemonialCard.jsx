import '../App.css'

function TestemonialsCard(props) {

  const Image = props.Image;
  const Name = props.Name;
  const Bio = props.Bio;
  const Comm = props.Comm;

  return (

    <div className="TestemonialsCard">
      <div className="TestemonialsCard__Box">
        <div className="Box__Top">
          <div className="Box__Top__Left">
            <img className="TestemonialsCard__Image__Selector" src={Image}></img>
          </div>
          <div className="Box__Top__Right">
            <div >
              <h1 className="Testemonial__Name">
                {Name}
              </h1>
            </div>
            <div>
              <p className="Testemonial__Bio">
                {Bio}
              </p>
            </div>
          </div>
        </div>
        <div className="Box__Bottom">
          <p className="Testemonial__Comm">
            {Comm}
          </p>
        </div>
      </div>
    </div>

  )
}

export default TestemonialsCard