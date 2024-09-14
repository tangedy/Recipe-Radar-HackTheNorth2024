import image from './images/test.png';
import './styles/RecipeItems.css'  



 

function RecipeItem(){
    return (
        <div className="RecipeItem">
            
            <div className="content">

                <img src={image} id='Pic' className='Picture'/>

               
                <div className='content-text'>
                    <h1>Title: Goose</h1>
                    <p>Description: This is a bird Lorem ipsum dolor sit amet, consectetur
                       adipiscing elit. Phasellus tincidunt nisi vel nisi auctor, ac vehicula magna suscipit. 
                       Proin tincidunt felis sit amet libero tincidunt, ac ullamcorper magna facilisis. Nulla facilisi. 
                       Nullam vestibulum eros magna, a tincidunt ipsum accumsan nec. Nam at dictum felis, sit amet aliquam metus. 
                       Duis tincidunt, purus sit amet suscipit vehicula, tortor neque lobortis leo, eget condimentum velit ligula 
                       id magna. Integer pretium, arcu sit amet varius volutpat, erat lectus interdum purus, ac pharetra turpis 
                       lectus vel risus. Nullam vulputate fermentum magna, ut vehicula ante pretium non. Etiam nec fringilla lorem, 
                       vitae ultricies lacus.</p>
                </div>
                
            </div>
        </div>
      );
}



export default RecipeItem;