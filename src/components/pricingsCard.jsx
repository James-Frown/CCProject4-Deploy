import '../App.css'

function pricingsCard(props) {

    const Image = props.Image;
    const Name = props.Name;
    const Director = props.Director;
    const Description = props.Description;
    const Url = props.Url;
  
    /* https://picsum.photos/300/300 */
    /* Desasteriod */
    /* Marvel Studios */
    /* Wars all scarring the earth, this massive asterioid is heading straight for us. what will, liam neilson do with his survival team! */
    /* https://soap2day.monster/ */
  
    return (
      <div className="Flixcard">
        <div className="Flixcard__Wrapper">
          <div className="Flixcard__Image">
            <img className="Image__BorderRaduis" src={Image} alt="image for movie"></img>
          </div>
          <div className="Flixcard__Content__Wrapper">
            <p className="Flixcard__Name">
              {Name}
            </p>
            <p className="Flixcard__Direrctor">
              Directed by: {Director}
            </p>
            <p className="Flixcard__Description">
              {Description}
            </p>
            <div className="Flixcard__Link">
              <a className="Flixcard__Url__Link" href={Url}>Click To Watch</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default pricingsCard