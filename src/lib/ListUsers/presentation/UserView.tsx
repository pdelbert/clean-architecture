interface RenderProps {
    className?: string
    children: React.ReactNode
}
const UserView = ({className, children}: RenderProps): React.ReactNode => {
    return <div className={className}>{children}</div>;
}

export default UserView;
