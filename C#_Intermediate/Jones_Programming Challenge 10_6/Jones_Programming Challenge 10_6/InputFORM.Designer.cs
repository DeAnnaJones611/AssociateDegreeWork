namespace Jones_Programming_Challenge_10_6
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            calculateButton = new Button();
            clearButton = new Button();
            quitButton = new Button();
            dormitoriesGroupBox = new GroupBox();
            dormitoryGroupBoxLabel = new Label();
            universitySuitesLabel = new Label();
            fathingHallLabel = new Label();
            pikeHallLabel = new Label();
            allenHallLabel = new Label();
            universitySuitesRadioButton = new RadioButton();
            farthingHallRadioButton = new RadioButton();
            pikeHallRadioButton = new RadioButton();
            allenHallRadioButton = new RadioButton();
            mealPlanGroupBox = new GroupBox();
            mealPlanGroupBoxLabel = new Label();
            mealUnlimitedLabel = new Label();
            meal14Label = new Label();
            meal7Label = new Label();
            mealUnlimitedRadioButton = new RadioButton();
            meal14RadioButton = new RadioButton();
            meal7RadioButton = new RadioButton();
            label1 = new Label();
            dormitoriesGroupBox.SuspendLayout();
            mealPlanGroupBox.SuspendLayout();
            SuspendLayout();
            // 
            // calculateButton
            // 
            calculateButton.Location = new Point(164, 360);
            calculateButton.Name = "calculateButton";
            calculateButton.Size = new Size(137, 61);
            calculateButton.TabIndex = 0;
            calculateButton.Text = "Calculate";
            calculateButton.UseVisualStyleBackColor = true;
            calculateButton.Click += calculateButton_Click;
            // 
            // clearButton
            // 
            clearButton.Location = new Point(364, 360);
            clearButton.Name = "clearButton";
            clearButton.Size = new Size(137, 61);
            clearButton.TabIndex = 1;
            clearButton.Text = "Clear";
            clearButton.UseVisualStyleBackColor = true;
            clearButton.Click += clearButton_Click;
            // 
            // quitButton
            // 
            quitButton.Location = new Point(561, 360);
            quitButton.Name = "quitButton";
            quitButton.Size = new Size(136, 61);
            quitButton.TabIndex = 2;
            quitButton.Text = "Quit";
            quitButton.UseVisualStyleBackColor = true;
            quitButton.Click += quitButton_Click;
            // 
            // dormitoriesGroupBox
            // 
            dormitoriesGroupBox.Controls.Add(dormitoryGroupBoxLabel);
            dormitoriesGroupBox.Controls.Add(universitySuitesLabel);
            dormitoriesGroupBox.Controls.Add(fathingHallLabel);
            dormitoriesGroupBox.Controls.Add(pikeHallLabel);
            dormitoriesGroupBox.Controls.Add(allenHallLabel);
            dormitoriesGroupBox.Controls.Add(universitySuitesRadioButton);
            dormitoriesGroupBox.Controls.Add(farthingHallRadioButton);
            dormitoriesGroupBox.Controls.Add(pikeHallRadioButton);
            dormitoriesGroupBox.Controls.Add(allenHallRadioButton);
            dormitoriesGroupBox.Location = new Point(58, 70);
            dormitoriesGroupBox.Name = "dormitoriesGroupBox";
            dormitoriesGroupBox.Size = new Size(363, 274);
            dormitoriesGroupBox.TabIndex = 3;
            dormitoriesGroupBox.TabStop = false;
            dormitoriesGroupBox.Text = "Dormitories";
            // 
            // dormitoryGroupBoxLabel
            // 
            dormitoryGroupBoxLabel.AutoSize = true;
            dormitoryGroupBoxLabel.Location = new Point(106, 23);
            dormitoryGroupBoxLabel.Name = "dormitoryGroupBoxLabel";
            dormitoryGroupBoxLabel.Size = new Size(119, 20);
            dormitoryGroupBoxLabel.TabIndex = 8;
            dormitoryGroupBoxLabel.Text = "Pick a Dormitory";
            // 
            // universitySuitesLabel
            // 
            universitySuitesLabel.AutoSize = true;
            universitySuitesLabel.Location = new Point(14, 228);
            universitySuitesLabel.Name = "universitySuitesLabel";
            universitySuitesLabel.Size = new Size(123, 20);
            universitySuitesLabel.TabIndex = 7;
            universitySuitesLabel.Text = "University Suites: ";
            // 
            // fathingHallLabel
            // 
            fathingHallLabel.AutoSize = true;
            fathingHallLabel.Location = new Point(14, 167);
            fathingHallLabel.Name = "fathingHallLabel";
            fathingHallLabel.Size = new Size(100, 20);
            fathingHallLabel.TabIndex = 6;
            fathingHallLabel.Text = "Farthing Hall: ";
            // 
            // pikeHallLabel
            // 
            pikeHallLabel.AutoSize = true;
            pikeHallLabel.Location = new Point(14, 106);
            pikeHallLabel.Name = "pikeHallLabel";
            pikeHallLabel.Size = new Size(74, 20);
            pikeHallLabel.TabIndex = 5;
            pikeHallLabel.Text = "Pike Hall: ";
            // 
            // allenHallLabel
            // 
            allenHallLabel.AutoSize = true;
            allenHallLabel.Location = new Point(14, 53);
            allenHallLabel.Name = "allenHallLabel";
            allenHallLabel.Size = new Size(81, 20);
            allenHallLabel.TabIndex = 4;
            allenHallLabel.Text = "Allen Hall: ";
            // 
            // universitySuitesRadioButton
            // 
            universitySuitesRadioButton.AutoSize = true;
            universitySuitesRadioButton.Location = new Point(156, 224);
            universitySuitesRadioButton.Name = "universitySuitesRadioButton";
            universitySuitesRadioButton.Size = new Size(162, 24);
            universitySuitesRadioButton.TabIndex = 3;
            universitySuitesRadioButton.TabStop = true;
            universitySuitesRadioButton.Text = "$2,500 per semester";
            universitySuitesRadioButton.UseVisualStyleBackColor = true;
            // 
            // farthingHallRadioButton
            // 
            farthingHallRadioButton.AutoSize = true;
            farthingHallRadioButton.Location = new Point(156, 163);
            farthingHallRadioButton.Name = "farthingHallRadioButton";
            farthingHallRadioButton.Size = new Size(162, 24);
            farthingHallRadioButton.TabIndex = 2;
            farthingHallRadioButton.TabStop = true;
            farthingHallRadioButton.Text = "$1,800 per semester";
            farthingHallRadioButton.UseVisualStyleBackColor = true;
            // 
            // pikeHallRadioButton
            // 
            pikeHallRadioButton.AutoSize = true;
            pikeHallRadioButton.Location = new Point(156, 104);
            pikeHallRadioButton.Name = "pikeHallRadioButton";
            pikeHallRadioButton.Size = new Size(162, 24);
            pikeHallRadioButton.TabIndex = 1;
            pikeHallRadioButton.TabStop = true;
            pikeHallRadioButton.Text = "$1,600 per semester";
            pikeHallRadioButton.UseVisualStyleBackColor = true;
            // 
            // allenHallRadioButton
            // 
            allenHallRadioButton.AutoSize = true;
            allenHallRadioButton.Location = new Point(156, 53);
            allenHallRadioButton.Name = "allenHallRadioButton";
            allenHallRadioButton.Size = new Size(162, 24);
            allenHallRadioButton.TabIndex = 0;
            allenHallRadioButton.TabStop = true;
            allenHallRadioButton.Text = "$1,500 per semester";
            allenHallRadioButton.UseVisualStyleBackColor = true;
            // 
            // mealPlanGroupBox
            // 
            mealPlanGroupBox.Controls.Add(mealPlanGroupBoxLabel);
            mealPlanGroupBox.Controls.Add(mealUnlimitedLabel);
            mealPlanGroupBox.Controls.Add(meal14Label);
            mealPlanGroupBox.Controls.Add(meal7Label);
            mealPlanGroupBox.Controls.Add(mealUnlimitedRadioButton);
            mealPlanGroupBox.Controls.Add(meal14RadioButton);
            mealPlanGroupBox.Controls.Add(meal7RadioButton);
            mealPlanGroupBox.Location = new Point(447, 70);
            mealPlanGroupBox.Name = "mealPlanGroupBox";
            mealPlanGroupBox.Size = new Size(387, 274);
            mealPlanGroupBox.TabIndex = 4;
            mealPlanGroupBox.TabStop = false;
            mealPlanGroupBox.Text = "Meal Plan";
            // 
            // mealPlanGroupBoxLabel
            // 
            mealPlanGroupBoxLabel.AutoSize = true;
            mealPlanGroupBoxLabel.Location = new Point(114, 33);
            mealPlanGroupBoxLabel.Name = "mealPlanGroupBoxLabel";
            mealPlanGroupBoxLabel.Size = new Size(116, 20);
            mealPlanGroupBoxLabel.TabIndex = 6;
            mealPlanGroupBoxLabel.Text = "Pick a Meal Plan";
            // 
            // mealUnlimitedLabel
            // 
            mealUnlimitedLabel.AutoSize = true;
            mealUnlimitedLabel.Location = new Point(0, 205);
            mealUnlimitedLabel.Name = "mealUnlimitedLabel";
            mealUnlimitedLabel.Size = new Size(120, 20);
            mealUnlimitedLabel.TabIndex = 5;
            mealUnlimitedLabel.Text = "Unlimited meals:";
            // 
            // meal14Label
            // 
            meal14Label.AutoSize = true;
            meal14Label.Location = new Point(6, 133);
            meal14Label.Name = "meal14Label";
            meal14Label.Size = new Size(202, 20);
            meal14Label.TabIndex = 4;
            meal14Label.Text = "Fourteen meals per semester:";
            // 
            // meal7Label
            // 
            meal7Label.AutoSize = true;
            meal7Label.Location = new Point(6, 75);
            meal7Label.Name = "meal7Label";
            meal7Label.Size = new Size(158, 20);
            meal7Label.TabIndex = 3;
            meal7Label.Text = "Seven meals per week:";
            // 
            // mealUnlimitedRadioButton
            // 
            mealUnlimitedRadioButton.AutoSize = true;
            mealUnlimitedRadioButton.Location = new Point(219, 201);
            mealUnlimitedRadioButton.Name = "mealUnlimitedRadioButton";
            mealUnlimitedRadioButton.Size = new Size(162, 24);
            mealUnlimitedRadioButton.TabIndex = 2;
            mealUnlimitedRadioButton.TabStop = true;
            mealUnlimitedRadioButton.Text = "$1,700 per semester";
            mealUnlimitedRadioButton.UseVisualStyleBackColor = true;
            // 
            // meal14RadioButton
            // 
            meal14RadioButton.AutoSize = true;
            meal14RadioButton.Location = new Point(219, 133);
            meal14RadioButton.Name = "meal14RadioButton";
            meal14RadioButton.Size = new Size(162, 24);
            meal14RadioButton.TabIndex = 1;
            meal14RadioButton.TabStop = true;
            meal14RadioButton.Text = "$1,200 per semester";
            meal14RadioButton.UseVisualStyleBackColor = true;
            // 
            // meal7RadioButton
            // 
            meal7RadioButton.AutoSize = true;
            meal7RadioButton.Location = new Point(219, 75);
            meal7RadioButton.Name = "meal7RadioButton";
            meal7RadioButton.Size = new Size(151, 24);
            meal7RadioButton.TabIndex = 0;
            meal7RadioButton.TabStop = true;
            meal7RadioButton.Text = "$600 per semester";
            meal7RadioButton.UseVisualStyleBackColor = true;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Segoe UI", 20F, FontStyle.Regular, GraphicsUnit.Point);
            label1.Location = new Point(171, 9);
            label1.Name = "label1";
            label1.Size = new Size(484, 46);
            label1.TabIndex = 5;
            label1.Text = "Dorm and Meal Plan Calculator";
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(925, 450);
            Controls.Add(label1);
            Controls.Add(mealPlanGroupBox);
            Controls.Add(dormitoriesGroupBox);
            Controls.Add(quitButton);
            Controls.Add(clearButton);
            Controls.Add(calculateButton);
            Name = "Form1";
            Text = "Form1";
            dormitoriesGroupBox.ResumeLayout(false);
            dormitoriesGroupBox.PerformLayout();
            mealPlanGroupBox.ResumeLayout(false);
            mealPlanGroupBox.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button calculateButton;
        private Button clearButton;
        private Button quitButton;
        private GroupBox dormitoriesGroupBox;
        private GroupBox mealPlanGroupBox;
        private Label label1;
        private RadioButton universitySuitesRadioButton;
        private RadioButton farthingHallRadioButton;
        private RadioButton pikeHallRadioButton;
        private RadioButton allenHallRadioButton;
        private Label fathingHallLabel;
        private Label pikeHallLabel;
        private Label allenHallLabel;
        private Label universitySuitesLabel;
        private Label mealUnlimitedLabel;
        private Label meal14Label;
        private Label meal7Label;
        private RadioButton mealUnlimitedRadioButton;
        private RadioButton meal14RadioButton;
        private RadioButton meal7RadioButton;
        private Label dormitoryGroupBoxLabel;
        private Label mealPlanGroupBoxLabel;
    }
}