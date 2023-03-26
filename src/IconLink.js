import Icon from "@mdi/react";

export default function IconLink({ icon, link }) {
  return (
    <a className="Icon" href={link}>
      <Icon path={icon} size={1.5} color={"white"} />
    </a>
  );
}
