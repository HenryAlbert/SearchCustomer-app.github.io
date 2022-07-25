# CustomerSearchApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.


There are 2 seperate solution are created for this task:

  1. Front-end in  angluar
	 * clone the  repository
	 * run "npm -i"
   * Run the project: ng serve
	 * proxy.config.jon has defined api url to enable the cors.  Open project in VSCode & update if required depends on step-2.
   * Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
   * Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

 2. WebApi in .NET WebApi 
     * Open project in VStudio.
     * Restore nuget packages and rebuild.
     * Run the project. 
     * Run the api on http://localhost:58123 as defined in the  front-end proxy

Please note: 
  1. Since this is sample project,  it does not include validation/authentication 
  2. ASP.NET webApi has been used to build simple a API instead of nodejs/express
  3. For testing purpose, ennble CORS  for communication
  4. For this sample project, build a simple UI defined based on requirement
  5. MVC pattern & DI are used in both solutions
  5. Front-end layout was designed for various display device
 

Front End:
  * 3 components  and 2 services are build to support this front-end application
  * home components is used to display the menu items
  * search compoents is used to display the UI option to get user input and call the API service to get the data based on input
  * result compoents is used to display the filter the results based on users info and also maintain all previous search results as well
  * assumed only policy number and Membership are used to search results 


API endpoint(s):

1. `GET /Customer?polno={policy number}&custno={customer number}` - finds all customer matching the specified policy number and customer number.

Sample Data Model:
**Customer:**
{
  "id": "1",
  "firstName": "Winne",
  "lastName": "Janc",
  "memberCardNumber": "0473128446",
  "policyNumber": "1405677686",
  "dataOfBirth": "26/07/1995"
}



