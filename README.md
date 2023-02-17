My project is called Beautiful Thing.

This project is created for viewing, sorting and selecting the right information with a convenient interface and cool features such as drag and drop.

By default, a table with information about 10 users is displayed on the screen. The information was taken from the JsonPlaceholder website.
To replace the information, you need to change the reference to the resource in the users.js file, as well as change the configuration of the columns variable in the app.js file, and also add the relevant information to the columns variable in the Table.jsx file, in the same place you need to change the information that will be appear in the table.
By clicking on the name of any column, it can be sorted by descending or ascending, which will make the search for the necessary information more convenient.

There is also a button on the main screen that opens a modal window when clicked. In this window, you can choose which columns will be displayed and which will not. On the left are the available, unselected columns, which you need to move the mouse to the right column with dnd. If you want to delete one of the columns on the right, you need to click on the cross, which is located to the right of the name of each column.
To search for available columns, you need to use the search above the left column.
After selecting the required columns, you need to click on the apply button on the right side at the bottom. After that, you will be transferred to the main page, where updated information will be waiting for you

![image](https://user-images.githubusercontent.com/109813340/219693435-afcdb71c-e78d-4011-b2dd-ea8590dcc0be.png)
![image](https://user-images.githubusercontent.com/109813340/219693524-fe933d86-aca2-4d5c-b225-dac67ae61afa.png)

There are 2 ways to install my app. The first, with the help of the commands: git init and git clone [https://github.com/eristor/A-beautiful-thing.git] and the name of the folder at the end. The second way is to run the project using vsCode.

!IMPORTANT For the project to work, you need to install the following components and packages: yarn add @redux-toolkit, yarn add react-beautiful-dnd, yarn add react-data-table-component.

