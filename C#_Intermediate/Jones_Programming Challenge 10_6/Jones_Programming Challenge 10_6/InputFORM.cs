namespace Jones_Programming_Challenge_10_6
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void quitButton_Click(object sender, EventArgs e)
        {
            //De'Anna Jones

            //This closes the form
            this.Close();
        }

        private void clearButton_Click(object sender, EventArgs e)
        {
            //De'Anna Jones 

            //This clears the form 

            //Makes the radio Buttons unclicked 
                //Makes the Allen Hall Radio Button false 
            allenHallRadioButton.Checked = false;

            //Makes the Pike Hall Radio Button false 
            pikeHallRadioButton.Checked = false;

            //Makes the Farthing Hall Radio Button false 
            farthingHallRadioButton.Checked = false;

            //Makes the Universtity Suites Radio Button false 
            universitySuitesRadioButton.Checked = false;

            //Makes the Meal 7 Radio Button false 
            meal7RadioButton.Checked = false;

            //Makes the Meal 14 Radio Button false 
            meal14RadioButton.Checked = false;

            //Makes the Unlimited Meals Radio Button false 
            mealUnlimitedRadioButton.Checked = false;

        }

        private void calculateButton_Click(object sender, EventArgs e)
        {
            //De'Anna Jones
            //Declares Varibles  
                //Set all the defaults for all varibles 
            //Make all the strings nulls 
            string mealPlanDescription = "";
            string dormitoryDescription = "";

            //Make all the ints 0 
            int mealPlanPrice = 0;
            int dormitoryPrice = 0;
            int totalCost;

            //Checks what's dormitory is checked checked 
                //If the alan hall  is checked 
            if (allenHallRadioButton.Checked)
            {
                //Give the value to description
                dormitoryDescription = "Allen Hall";

                //Gives the value to price
                dormitoryPrice = 1500;
            }

            //If the Pike hall is checked 
            if (pikeHallRadioButton.Checked)
            {
                //Give the value to description
                dormitoryDescription = "Pike Hall";

                //Gives the value to price
                dormitoryPrice = 1600;
            }

            //If the Farthing hall  is checked 
            if (farthingHallRadioButton.Checked)
            {
                //Give the value to description
                dormitoryDescription = "Farthing Hall";

                //Gives the value to price
                dormitoryPrice = 1800;
            }

            //If the University Hall is checked 
            if (universitySuitesRadioButton.Checked)
            {
                //Give the value to description
                dormitoryDescription = "University Suites";

                //Gives the value to price
                dormitoryPrice = 2500;
            }



            //Checks Meal Plans
            //If the 7 meals is checked 
            if (meal7RadioButton.Checked)
            {
                //Give the value to description
                mealPlanDescription = "7 meals per week";

                //Gives the value to price
                mealPlanPrice = 600;
            }

            //If the 14 meals is checked 
            if (meal14RadioButton.Checked)
            {
                //Give the value to description
                mealPlanDescription = "14 meals per week";

                //Gives the value to price
                mealPlanPrice = 1200;
            }

            //If the Unlimited meals is checked 
            if (mealUnlimitedRadioButton.Checked)
            {
                //Give the value to description
                mealPlanDescription = "Unlimited meals";

                //Gives the value to price
                mealPlanPrice = 1700;
            }

            //Calculates the cost 
            totalCost = mealPlanPrice + dormitoryPrice;

          


            //Creates the instance of the form to print out
            ReultForm resultsForm = new ReultForm();

            //Prints out all the information
            //Dormitory 
                //Makes the description equal to the checked description 
            resultsForm.dormNameOutput.Text = dormitoryDescription;
                //Makes the price equal to the checked price
            resultsForm.dormPriceOutput.Text = dormitoryPrice.ToString("c");

            //Prints Meal Plans
                //Makes the description equal to the checked description 
            resultsForm.mealPlanDescriptionOutput.Text = mealPlanDescription;
                //Makes the price equal to the checked price
            resultsForm.mealPlanPriceOutput.Text = mealPlanPrice.ToString("c");

            //Prints total
            resultsForm.totalOutput.Text = totalCost.ToString("c");


            //Shows the results to user
            resultsForm.ShowDialog();

        }
    }
}