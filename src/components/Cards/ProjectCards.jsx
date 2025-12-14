import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  &:hover ${Button} {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

// const Video = styled.video`
//   width: 100%;
//   height: 180px;
//   border-radius: 10px;
//   object-fit: cover;
//   box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
//   background-color: ${({ theme }) => theme.white};
// `;

const Video = styled.video`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  // background-color: ${({ theme }) => theme.white};
  background-color: #000;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 1px 6px;
  border-radius: 8px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

// const InfoNote = styled.p`
//   font-size: 12px;
//   font-style: italic;
//   color: ${({ theme }) => theme.text_secondary + 90};
//   text-align: center;
//   margin-top: 6px;
// `;

const InfoNote = styled.p`
  font-size: 13px;
  text-align: center;
  color: #cccccc;
  margin-top: 8px;
  line-height: 1.6;
`;

// const Members = styled.div`
//     display: flex;
//     align-items: center;
//     padding-left: 10px;
// `
// const Avatar = styled.img`
//     width: 38px;
//     height: 38px;
//     border-radius: 50%;
//     margin-left: -10px;
//     background-color: ${({ theme }) => theme.white};
//     box-shadow: 0 0 10px rgba(0,0,0,0.2);
//     border: 3px solid ${({ theme }) => theme.card};
// `

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      {/* <Image src={project.image}/> */}

      {project.video ? (
        <>
          <Video
            src={process.env.PUBLIC_URL + project.video}
            autoPlay
            muted
            loop
            playsInline
            poster={project.image} 
          />
          <InfoNote>
            <span style={{ fontWeight: 600, color: "#00BFFF" }}>
              📽️ Quick Preview:
            </span>
            &nbsp; <strong>Click the card</strong>{" "}
            and scroll down for full demo & source code.
          </InfoNote>
        </>
      ) : (
        <>
          <Image src={project.image} alt={project.title} />
          <InfoNote>
            <span style={{ fontWeight: 600, color: "#00BFFF" }}>
              📽️ Quick Preview:
            </span>
            &nbsp; <strong>Click the card</strong>{" "}
            and scroll down for full demo  & source code.
          </InfoNote>
        </>
      )}

      {/* <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags> */}

       <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={`${tag}-${index}`}>{tag}</Tag>
        ))}
      </Tags>

      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {/* <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img}/>
                ))}
            </Members> */}
      {/* <Button>View Project</Button> */}
    </Card>
  );
};

export default ProjectCards;

