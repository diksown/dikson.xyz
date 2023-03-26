import Icon from "@mdi/react";

export default function IconLink({ icon, link }) {
  return (
    <a className="Icon" href={link} target="_blank" rel="noreferrer">
      <Icon path={icon} size={1.5} />
    </a>
  );
}
