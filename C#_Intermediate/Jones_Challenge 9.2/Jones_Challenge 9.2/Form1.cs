using System.Drawing.Text;
using System.Security.Cryptography.X509Certificates;

using System;

namespace Jones_Challenge_9._2
{
    public partial class Form1 : Form
    {
        //This decalres the stucture of Soda
        struct Soda
        {
            //De'Anna Jones
            //These are the peices to the structure
            public string name;
            public double price;
            public int amount;

        }//End of Struct


        //Array used through out the program 
        Soda[] useArray = new Soda[5]
        {
            //Declare all the items in the array
                //Using the soda structre 
            new Soda {name ="Cola" ,price =  1.00, amount = 20 },
            new Soda {name ="Root Beer" , price =1.00,amount =  20 },
            new Soda {name ="Lemon Lime" , price =1.00, amount = 20 },
            new Soda{name ="Grape Soda", price =1.50, amount = 20 },
            new Soda{name ="Cream Soda",price = 1.50, amount = 20 }

        };

        //The total used by multiple methods 
        double total;

        public Form1()
        {
            InitializeComponent();
        }




        private void Form1_Load(object sender, EventArgs e)
        {
            //De'Anna Jones 
            //This creates the array list of the soda with all the needed infromation

            //Declares the start amount of total 
            total = 0;

            //Prints out the total amount in currency
            totalSalesOutput.Text = total.ToString("c");

            //Prints the start amount  of the cola Soda 
            colaAmountLabel.Text = useArray[0].amount.ToString();

            //Prints the start amount of root beer Soda 
            rootBeerAmountLabel.Text = useArray[1].amount.ToString();

            //Prints the start amount of lemon lime Soda 
            lemonLimeAmountLabel.Text = useArray[2].amount.ToString();

            //Print the start amount of grape Soda
            grapeSodaAmountLabel.Text = useArray[3].amount.ToString();

            //Prints the start amount of cream Soda 
            creamSodaAmountLabel.Text = useArray[4].amount.ToString();

        }



        private void exitButton_Click(object sender, EventArgs e)
        {
            //De'Anna Jones
            //This closes the program
            this.Close();
        }

        //Makes the structure used to make soda


        private int VendingSoda(string nameSoda)
        {
            //De'Anna Jones 

            //Declares Varibles 
            Soda sodaBought = new Soda();

            //Loops through the global array
            for (int arrayIndex = 0; arrayIndex < useArray.Length; arrayIndex++)
            {
                //If the name of the current index is the same as the name passed throught
                if (useArray[arrayIndex].name == nameSoda)
                {
                    //The oject that mathces name is made equal to the tempuary vairble 
                    sodaBought = useArray[arrayIndex];

                }//End if

            }//End of for loop

            //If the amount of soda is more than 0 
            if (sodaBought.amount > 0)
            {
                //To total is increased by the price of the soda
                total += sodaBought.price;
                //This prints out the total to the user in currency 
                totalSalesOutput.Text = total.ToString("c");
                //Then decreased the soda amount by 0ne 
                sodaBought.amount -= 1;

                //Loops through the global array 
                for (int arrayIndex = 0; arrayIndex < useArray.Length; arrayIndex++)
                {
                    //If the name of the current index is the same as the tempuary soda
                    if (useArray[arrayIndex].name == nameSoda)
                    {
                        //Then is makes the amount of the index soda equal to bought soda amount 
                        useArray[arrayIndex].amount = sodaBought.amount;
                        break;

                    }//End if

                }//End of for loop 

            }//End if 

            //Else the amount is zero 
            else
            {

                //This message is printed out to the user 
                MessageBox.Show("Sorry, there are no more soda. :(");

            }//End else


            //Returns the amount of soda left 
            return sodaBought.amount;
        }//End of Vending soda


        private void groupBox1_Enter(object sender, EventArgs e)
        { }
        private void colaPicture_Click(object sender, EventArgs e)
        {
            //De'Anna Jones

            //When the cola group is clicked then this code is ran
            //Passes the soda through to the method which prints out the results

            //Delaces the vaibles
            string sodaName = "Cola";
            int amountSoda;


            //Calls vending function to calculate amount 
            amountSoda = VendingSoda(sodaName);

            //Prints result from the function 
            colaAmountLabel.Text = amountSoda.ToString();
        }

        private void rootBeerPicture_Click(object sender, EventArgs e)
        {
            //De'Anna Jones
            //When the cola picture is clicked then this code is ran
            //Passes the soda through to the method which prints out the results

            //Delaces the vaibles
            string sodaName = "Root Beer";
            int amountSoda;


            //Calls vending function to calculate amount 
            amountSoda = VendingSoda(sodaName);

            //Prints result from the function 
            rootBeerAmountLabel.Text = amountSoda.ToString();
        }

        private void lemonLimePicture_Click(object sender, EventArgs e)
        {
            //De'Anna Jones
            //When the lemon Lime picture is clicked then this code is ran
            //Passes the soda through to the method which prints out the results

            //Delaces the vaibles
            string sodaName = "Lemon Lime";
            int amountSoda;


            //Calls vending function to calculate amount 
            amountSoda = VendingSoda(sodaName);

            //Prints result from the function 
            lemonLimeAmountLabel.Text = amountSoda.ToString();
        }

        private void grapePicture_Click(object sender, EventArgs e)
        {
            //De'Anna Jones
            //When the grape picture is clicked then this code is ran
            //Passes the soda through to the method which prints out the results

            //Delaces the vaibles
            string sodaName = "Grape Soda";
            int amountSoda;


            //Calls vending function to calculate amount 
            amountSoda = VendingSoda(sodaName);

            //Prints result from the function 
            grapeSodaAmountLabel.Text = amountSoda.ToString();
        }

        private void creamPicture_Click(object sender, EventArgs e)
        {
            //De'Anna Jones
            //When the cream picture is clicked then this code is ran
            //Passes the soda through to the method which prints out the results

            //Delaces the vaibles
            string sodaName = "Cream Soda";
            int amountSoda;


            //Calls vending function to calculate amount 
            amountSoda = VendingSoda(sodaName);

            //Prints result from the function 
            creamSodaAmountLabel.Text = amountSoda.ToString();
        }
    }
}
