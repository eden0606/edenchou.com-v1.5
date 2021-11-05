import './ProjectCard.css';

function ProjectCard(props) {

    return (
        <div className="card-container">
            <p className="card-title">{props.title} <span className="pipe-color">&mdash;</span> {props.date}</p>
            <div className="card-img-container">
                <img className="img-size" src={props.src} alt=""/>
            </div>
            <div className="tag-container">
                {props.tags.map((tag, key) => (
                    <div key={key} className="tag-spacing">
                        {tag === "html/css" ? <p className="html-css-tag-content">{tag}</p> :
                        (tag === "bulma" || tag === "bootstrap") ? <p className="style-tag-content">{tag}</p> :
                        (tag === "react.js" || tag === "react.tsx" || tag === "javascript" || tag === "next.js") ? <p className="js-tag-content">{tag}</p> :
                        (tag === "node.js" || tag === "node.tsx") ? <p className="node-tag-content">{tag}</p> :
                        tag === "airtable" ? <p className="airtable-firebase-tag-content">{tag}</p> :
                        tag === "firebase" ? <p className="airtable-firebase-tag-content">{tag}</p> :
                        tag === "wix" ? <p className="wix-wordpress-tag-content">{tag}</p> :
                        tag === "wordpress" ? <p className="wix-wordpress-tag-content">{tag}</p> :
                        tag === "sqlalchemy" ? <p className="sqlalchemy-tag-content">{tag}</p> :
                        tag === "flask" ? <p className="flask-tag-content">{tag}</p> :
                        tag === "adobe" ? <p className="adobe-tag-content">{tag}</p> :
                        null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;