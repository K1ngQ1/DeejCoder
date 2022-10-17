import Login from "../components/profile/Login";

//renders and exports the profile component and has a page component for aesthetics
export default function LoginPage() {
    return (
        <div className="artboard bg-base-200 rounded-xl border border-solid border-accent p-4 w-10/12 mb-2 justify-center items-center">
            <Login />
        </div>
    );
}
