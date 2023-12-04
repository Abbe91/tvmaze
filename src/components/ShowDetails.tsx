import React from "react";
interface ShowDetailsProps {
  show: {
    id: number;
    name: string;
    summary: string;
    image: { medium: string };
    cast?: Array<{
      person: {
        image: any;
        name: string;
      };
    }>;
    genres?: string[];
  };
}

const ShowDetails: React.FC<ShowDetailsProps> = ({ show }) => {
  return (
    <div className="show-details">
      <div className="image-and-summary">
        <div className="show-details-header">
          {show.image && (
            <img
              className="show-details-image"
              src={show.image.medium}
              alt={show.name}
            />
          )}
          <div className="show-details-info">
            <h2>{show.name}</h2>
            {show.genres && (
              <div className="genres">Genres: {show.genres.join(", ")}</div>
            )}
          </div>
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      </div>

      <div className="show-details-content">
        {show.cast && (
          <div className="cast-section">
            <h3>Cast:</h3>
            <div className="cast-container">
              {show.cast.map((castMember, index) => (
                <div key={castMember.person.name} className="cast-member">
                  {castMember.person.name && (
                    <div>
                      {castMember.person.image &&
                        castMember.person.image.medium && (
                          <img
                            className="cast-member-image"
                            src={castMember.person.image.medium}
                            alt={castMember.person.name}
                          />
                        )}
                      <div className="cast-member-details">
                        <p>{castMember.person.name}</p>
                      </div>
                    </div>
                  )}
                  {(index + 1) % 2 === 0 && <br />}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowDetails;
