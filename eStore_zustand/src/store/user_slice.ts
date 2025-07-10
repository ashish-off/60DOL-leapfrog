type UserState = {
userName : string;
fullName : string;
age : number;
address : string;
};

type UserAction = {
    setAddress: (address : string) => void;
}
