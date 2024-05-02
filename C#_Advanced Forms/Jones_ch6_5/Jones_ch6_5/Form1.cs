namespace Jones_ch6_5
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label9_Click(object sender, EventArgs e)
        {

        }

        private void groupBox1_Enter(object sender, EventArgs e)
        {

        }


        //The moduals


        //return moduals
        private double OilLubeCharges(int oil, int lube)
        {
            //Declare constants
            double oilPrice = 26;
            double lubePrice = 18;

            //Declare Varibles
            double oilCost = 0;
            double lubeCost = 0;
            double oilLubeTotal = 0;

            //Checks if oil was selected
            if (oil == 1)
            {
                //make the cost equal to price
                oilCost = oilPrice;
            }

            //Checks if lube was selected
            if (lube == 1)
            {
                //make cost equal to price
                lubeCost = lubePrice;
            }

            //Calculates the cost of oil and lube
            oilLubeTotal = lubeCost + oilCost;

            //Returns oil and lub
            return oilLubeTotal;
        }

        private double FlushCharges(int radiator, int transmission)
        {

            //Declear Varibles
            double radiatorTranmissionTotal = 0;
            double radiatorCost = 0;
            double transmissionCost = 0;

            //Declear Varibles
            double radiatorPrice = 30;
            double tranmissionPrice = 80;

            //Checks if radiator was selected
            if (radiator == 1)
            {
                //make cost equal to price
                radiatorCost = radiatorPrice;
            }

            //checks if transmission was selected
            if (transmission == 1)
            {
                //make cost equal to price
                transmissionCost = tranmissionPrice;
            }

            //Calculate cost of radiator and transmission
            radiatorTranmissionTotal = radiatorCost + transmissionCost;


            //returns the total
            return radiatorTranmissionTotal;
        }

        private double MiscCharges(int inspection, int muffler, int tire)
        {
            //Declares Varibles
            double miscTotal = 0;
            double inspectionCost = 0;
            double mufflerCost = 0;
            double tireCost = 0;

            //Declares Constants
            double inspectionPrice = 15;
            double mufflerPrice = 100;
            double tirePrice = 20;


            //Checks if inspection selected
            if (inspection == 1)
            {
                //make cost equal to price
                inspectionCost = inspectionPrice;
            }


            //Checks if muffler was selected
            if (muffler == 1)
            {
                //make cost equal to price
                mufflerCost = mufflerPrice;
            }

            //Checks if muffler was selected
            if (tire == 1)
            {
                //make cost equal to price
                tireCost = tirePrice;
            }


            //Calculates the cost of mics 
            miscTotal = inspectionCost + mufflerCost + tireCost;


            //returns total
            return miscTotal;
        }

        private double OtherCharges(double parts, double labor)
        {
            //varibles and constants
            double otherChargesTotal = 0;
            int perHour = 20;

            try
            {
                //calculates the total charge of parts and labor
                //calculates the total pay based on the hours spent and hourly rate
                otherChargesTotal = parts + (labor * perHour);
            }


            //what happens when wrong input it added
            catch
            {

                //Message show if wrong number is shown
                MessageBox.Show("Please enter correct numbers. Thank you");
            }

            //returns the total of the other charges
            return otherChargesTotal;

        }


        private double TaxCharges(double parts)
        {
            //declare constants and varibles
            double totalTax = 0;
            double taxPrecent = .06;

            //tries to calculate 
            try
            {
                //Calculates taxes on parts
                totalTax = parts * taxPrecent;
            }

            //Catches if wrong input
            catch
            {
                MessageBox.Show("Please enter correct numbers to caclulate taxes. Thank you");
            }

            return totalTax;

        }

        private double TotalCharges(double oilLubeCharges, double flushCharges, double miscCharges, double otherCharges, double TaxCharges)
        {

            //declare varibles
            double totalCarCharges = 0;


            //Calculates the total charge
            totalCarCharges = oilLubeCharges + flushCharges + miscCharges + otherCharges + TaxCharges;

            //returns the results
            return totalCarCharges;
        }

        //void methods

        private void ClearOilLube()
        {
            //clears the checkboxes
            oilChangeCheckBox.Checked = false;
            lubeJobCheckBox.Checked = false;

        }

        private void ClearFlush()
        {
            //clears the checkboxes
            radiatorFlushCheckBox.Checked = false;
            transmissionFlushCheckBox.Checked = false;
        }

        private void ClearMisc()
        {
            //clears the checkbox
            inspectionCheckBox.Checked = false;
            replaceMufflerCheckBox.Checked = false;
            tireRotationCheckBox.Checked = false;
        }

        private void ClearOther()
        {

            //clears the Other section of the form
            partsInput.Text = "";
            laborInput.Text = "";
        }

        private void ClearFees()
        {
            //Clears the fees section of the form
            servicesLaborOutput.Text = "";
            partOuput.Text = "";
            taxOutput.Text = "";
            totalFeesOutput.Text = "";
        }
        private void calculateButton_Click(object sender, EventArgs e)
        {
            //declear varibles

            //Delcare selection variables
            int oilSelection = 0;
            int lubeSelection = 0;
            int radiatorSelection = 0;
            int transmissionSelection = 0;
            int inspectionSelection = 0;
            int mufflerSelection = 0;
            int tireSelection = 0;
            double taxTotal = 0;

            //Declare regular varibles
            double oilLubeCost;
            double flushCost;
            double miscCost;
            double otherCost;
            double partsCost = 0;
            double laborHour;
            double servicesLaborCost;
            double finalCost;

            //Declare Constant
            int perHour = 20;
            try
            {

                //Get Input


                //checks if the chech boxes are checked

                //checks oil
                if (oilChangeCheckBox.Checked)
                {
                    //Makes the selection 1
                    oilSelection = 1;

                }

                //checks lube
                if (lubeJobCheckBox.Checked)
                {
                    //Make the selection 1
                    lubeSelection = 1;

                }

                //checks radiator flush
                if (radiatorFlushCheckBox.Checked)
                {
                    //Make the selection 1
                    radiatorSelection = 1;

                }

                //checks transmission flush
                if (transmissionFlushCheckBox.Checked)
                {
                    //Make selection 1
                    transmissionSelection = 1;

                }

                //checks inspection 
                if (inspectionCheckBox.Checked)
                {
                    //Make selection 1
                    inspectionSelection = 1;

                }

                //Checks replace Muffler
                if (replaceMufflerCheckBox.Checked)
                {
                    //Make selection 1 
                    mufflerSelection = 1;

                }

                //Checks Tire Rotation
                if (tireRotationCheckBox.Checked)
                {
                    //Make selection 1
                    tireSelection = 1;

                }

                //Get the parts and labor input
                if (partsInput.Text.Length > 0)
                {
                    partsCost = double.Parse(partsInput.Text);
                }
                laborHour = double.Parse(laborInput.Text);


                //Call moduals
                oilLubeCost = OilLubeCharges(oilSelection, lubeSelection);
                flushCost = FlushCharges(radiatorSelection, transmissionSelection);
                miscCost = MiscCharges(inspectionSelection, mufflerSelection, tireSelection);
                otherCost = OtherCharges(partsCost, laborHour);

                //If there is a charge for part
                if (partsCost > 0)
                {
                    //Calls tax modual
                    taxTotal = TaxCharges(partsCost);
                }

                //Calls final calulations
                finalCost = TotalCharges(oilLubeCost, flushCost, miscCost, otherCost, taxTotal);

                //Calculates the services and Labor
                servicesLaborCost = oilLubeCost + flushCost + miscCost + (laborHour * perHour);


                //Print Results

                //Prints out servies and Labor
                servicesLaborOutput.Text = servicesLaborCost.ToString("c");
                //Prints parts and services
                partOuput.Text = partsCost.ToString("c");
                //print out taxes
                taxOutput.Text = taxTotal.ToString("c");
                //Prints out total
                totalFeesOutput.Text = finalCost.ToString("c");


            }

            //If the letters are entered
            catch
            {
                //Displayed if letters are ented
                MessageBox.Show("Please enter correct numbers.");
            }
        }

        private void clearButton_Click(object sender, EventArgs e)
        {

            //Calls the clear Methods
            ClearOilLube();
            ClearFlush();
            ClearMisc();
            ClearOther();
            ClearFees();

        }

        private void quitButton_Click(object sender, EventArgs e)
        {
            //Closes the form
            this.Close();
        }
    }
}