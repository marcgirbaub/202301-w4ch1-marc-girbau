interface InfoProps {
  pointingGentlemen: number;
}

const Info = ({ pointingGentlemen }: InfoProps): JSX.Element => {
  return <p className="info">{pointingGentlemen} gentlemen pointing at you</p>;
};

export default Info;
