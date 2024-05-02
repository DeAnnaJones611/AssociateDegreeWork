namespace Jones_Programming_Challenge_10_6
{
    partial class ReultForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            dormPriceLabel = new Label();
            dormPriceOutput = new Label();
            mealPlanDescriptionLabel = new Label();
            mealPlanDescriptionOutput = new Label();
            formLabel = new Label();
            mealPlanPriceOutput = new Label();
            mealPlanPriceLabel = new Label();
            dormNameLabel = new Label();
            dormNameOutput = new Label();
            totalLabel = new Label();
            totalOutput = new Label();
            quitButton = new Button();
            SuspendLayout();
            // 
            // dormPriceLabel
            // 
            dormPriceLabel.AutoSize = true;
            dormPriceLabel.Location = new Point(135, 190);
            dormPriceLabel.Name = "dormPriceLabel";
            dormPriceLabel.Size = new Size(90, 20);
            dormPriceLabel.TabIndex = 0;
            dormPriceLabel.Text = "Dorm Price: ";
            // 
            // dormPriceOutput
            // 
            dormPriceOutput.BorderStyle = BorderStyle.FixedSingle;
            dormPriceOutput.Location = new Point(231, 208);
            dormPriceOutput.Name = "dormPriceOutput";
            dormPriceOutput.Size = new Size(161, 27);
            dormPriceOutput.TabIndex = 1;
            // 
            // mealPlanDescriptionLabel
            // 
            mealPlanDescriptionLabel.AutoSize = true;
            mealPlanDescriptionLabel.Location = new Point(64, 263);
            mealPlanDescriptionLabel.Name = "mealPlanDescriptionLabel";
            mealPlanDescriptionLabel.Size = new Size(161, 20);
            mealPlanDescriptionLabel.TabIndex = 2;
            mealPlanDescriptionLabel.Text = "Meal Plan Description: ";
            // 
            // mealPlanDescriptionOutput
            // 
            mealPlanDescriptionOutput.BorderStyle = BorderStyle.FixedSingle;
            mealPlanDescriptionOutput.Location = new Point(231, 282);
            mealPlanDescriptionOutput.Name = "mealPlanDescriptionOutput";
            mealPlanDescriptionOutput.Size = new Size(161, 27);
            mealPlanDescriptionOutput.TabIndex = 3;
            // 
            // formLabel
            // 
            formLabel.AutoSize = true;
            formLabel.Font = new Font("Segoe UI", 25F, FontStyle.Regular, GraphicsUnit.Point);
            formLabel.Location = new Point(43, 25);
            formLabel.Name = "formLabel";
            formLabel.Size = new Size(603, 57);
            formLabel.TabIndex = 4;
            formLabel.Text = "Dorm and Meal Plan Calculator";
            // 
            // mealPlanPriceOutput
            // 
            mealPlanPriceOutput.BorderStyle = BorderStyle.FixedSingle;
            mealPlanPriceOutput.Location = new Point(231, 360);
            mealPlanPriceOutput.Name = "mealPlanPriceOutput";
            mealPlanPriceOutput.Size = new Size(161, 27);
            mealPlanPriceOutput.TabIndex = 5;
            // 
            // mealPlanPriceLabel
            // 
            mealPlanPriceLabel.AutoSize = true;
            mealPlanPriceLabel.Location = new Point(108, 333);
            mealPlanPriceLabel.Name = "mealPlanPriceLabel";
            mealPlanPriceLabel.Size = new Size(117, 20);
            mealPlanPriceLabel.TabIndex = 6;
            mealPlanPriceLabel.Text = "Meal Plan Price: ";
            // 
            // dormNameLabel
            // 
            dormNameLabel.AutoSize = true;
            dormNameLabel.Location = new Point(127, 114);
            dormNameLabel.Name = "dormNameLabel";
            dormNameLabel.Size = new Size(98, 20);
            dormNameLabel.TabIndex = 7;
            dormNameLabel.Text = "Dorm Name: ";
            // 
            // dormNameOutput
            // 
            dormNameOutput.BorderStyle = BorderStyle.FixedSingle;
            dormNameOutput.Location = new Point(231, 135);
            dormNameOutput.Name = "dormNameOutput";
            dormNameOutput.Size = new Size(161, 27);
            dormNameOutput.TabIndex = 8;
            // 
            // totalLabel
            // 
            totalLabel.AutoSize = true;
            totalLabel.Font = new Font("Segoe UI", 15F, FontStyle.Regular, GraphicsUnit.Point);
            totalLabel.Location = new Point(459, 102);
            totalLabel.Name = "totalLabel";
            totalLabel.Size = new Size(80, 35);
            totalLabel.TabIndex = 9;
            totalLabel.Text = "Total: ";
            // 
            // totalOutput
            // 
            totalOutput.BorderStyle = BorderStyle.FixedSingle;
            totalOutput.Location = new Point(425, 152);
            totalOutput.Name = "totalOutput";
            totalOutput.Size = new Size(137, 33);
            totalOutput.TabIndex = 10;
            // 
            // quitButton
            // 
            quitButton.Location = new Point(425, 233);
            quitButton.Name = "quitButton";
            quitButton.Size = new Size(137, 50);
            quitButton.TabIndex = 11;
            quitButton.Text = "Quit";
            quitButton.UseVisualStyleBackColor = true;
            quitButton.Click += quitButton_Click;
            // 
            // ReultForm
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(704, 450);
            Controls.Add(quitButton);
            Controls.Add(totalOutput);
            Controls.Add(totalLabel);
            Controls.Add(dormNameOutput);
            Controls.Add(dormNameLabel);
            Controls.Add(mealPlanPriceLabel);
            Controls.Add(mealPlanPriceOutput);
            Controls.Add(formLabel);
            Controls.Add(mealPlanDescriptionOutput);
            Controls.Add(mealPlanDescriptionLabel);
            Controls.Add(dormPriceOutput);
            Controls.Add(dormPriceLabel);
            Name = "ReultForm";
            Text = "ReultForm";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label dormPriceLabel;
        private Label mealPlanDescriptionLabel;
        private Label formLabel;
        private Label mealPlanPriceLabel;
        private Label dormNameLabel;
        private Label totalLabel;
        private Button quitButton;
        public Label dormPriceOutput;
        public Label mealPlanDescriptionOutput;
        public Label mealPlanPriceOutput;
        public Label dormNameOutput;
        public Label totalOutput;
    }
}