export interface IuserData {
id:number,
    name:string,
    image:string
    test: ITest
    enum:test
}

interface ITest {
    name:string,
    image:string

}

enum test {"test", 'test-2'}
