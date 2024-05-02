using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Jones_cc6
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void patientsBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.patientsBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.jonesMedicalDataSet);

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            //De'Anna Jones
            // TODO: This line of code loads data into the 'jonesMedicalDataSet.patients' table. You can move, or remove it, as needed.
            this.patientsTableAdapter.Fill(this.jonesMedicalDataSet.patients);

        }

        private void nameSearchButton_Click(object sender, EventArgs e)
        {
            //This calls the query to search the name
            this.patientsTableAdapter.SearchName(this.jonesMedicalDataSet.patients,nameSearchInput.Text);
        }

        private void showAllButton_Click(object sender, EventArgs e)
        {
            this.patientsTableAdapter.Fill(this.jonesMedicalDataSet.patients);
        }

        private void closeButton_Click(object sender, EventArgs e)
        {
            //De'Anna Jones
            this.Close();
        }

        private void addressSearchButton_Click(object sender, EventArgs e)
        {
            //This calls the query to search the address
            this.patientsTableAdapter.SearchAddress(this.jonesMedicalDataSet.patients, addressSearchInput.Text);
        }

        private void phoneSearchButton_Click(object sender, EventArgs e)
        {
            //This calls the query to search the phone
            this.patientsTableAdapter.SearchPhone(this.jonesMedicalDataSet.patients, phoneSearchInput.Text);
        }

        private void emailSearchButton_Click(object sender, EventArgs e)
        {
            //This calls the query to search the email
            this.patientsTableAdapter.SearchEmail(this.jonesMedicalDataSet.patients, emailSearchInput.Text);
        }

        private void deductibleLimitSearchButton_Click(object sender, EventArgs e)
        {
            //Allows the input to be parsed into a decimal
            decimal deductibleStringInput;
            deductibleStringInput = decimal.Parse(deductibleLimitSearchInput.Text);

            //This calls the query to search the deductible
            this.patientsTableAdapter.BelowDeductible(this.jonesMedicalDataSet.patients, deductibleStringInput);
        }

        private void clearButton_Click(object sender, EventArgs e)
        {
            //Clears the form
            nameSearchInput.Text = "";
            addressSearchInput.Text = "";
            phoneSearchInput.Text = "";
            emailSearchInput.Text = "";
            deductibleLimitSearchInput.Text = "";

        }
    }
}
