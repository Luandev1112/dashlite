const UserGroup = ({ className, ...props }) => {
  return <div className={`user-avatar-group ${className ? className : ""}`}>{props.children}</div>;
};

export default UserGroup;
