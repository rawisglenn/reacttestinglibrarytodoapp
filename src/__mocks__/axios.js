const mockResponse = {
    data:{
        results:[
            {
                name:{
                    first:"Jane",
                    last:"Fon"
                },
                picture:{
                    large:"https://randomuser.me/api/portraits/women/68.jpg"
                },
                login: {
                    username:"janefon"
                }
            },
            {
                name:{
                    first:"Mila",
                    last:"Heng"
                },
                picture:{
                    large:"https://randomuser.me/api/portraits/women/78.jpg"
                },
                login: {
                    username:"milahaha"
                }
            },
            {
                name:{
                    first:"Leah",
                    last:"Watever"
                },
                picture:{
                    large:"https://randomuser.me/api/portraits/women/96.jpg"
                },
                login: {
                    username:"lalala"
                }
            }
        ]   
    }
};

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}