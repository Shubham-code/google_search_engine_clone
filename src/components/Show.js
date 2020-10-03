import React from 'react';

const Show = (props) => {

    const {result,Info} = props;

    return (
        <div className="show">
            <div className="show__info">
                {Info ? `Total Results: ${Info.totalResults}`:" "}
            </div>
            {result.length > 0 ? 
                result.map((result,index)=>(
                            <div key={index} className="show__details">
                        <div className="show__link">
                            <a href={result.link}>
                                {result.displayLink}
                            </a>
                        </div>
                                    <div className="show__title">
                                    <a href={result.link}> {result.title} </a>
                                    </div>
                                        <div className="show__description">
                                        <p>{result.snippet}</p>
                                        </div>
                        </div>
                            
                            )
                        ):""}     
        </div>
    );
};

export default Show;
