//
//  LitterTableViewCell.swift
//  litter-swift
//
//  Created by Fullscreen on 8/14/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import UIKit
protocol CellDelegate : class {
    func didPressFlagButton(_ cell: LitterTableViewCell)
    func didPressCleanButton(_ cell: LitterTableViewCell)
}

class LitterTableViewCell: UITableViewCell {
    @IBOutlet weak var litterImageView: UIImageView!
    @IBOutlet weak var litterAddressLabel: UILabel!
    
    @IBOutlet weak var cleanButton: UIButton!
    @IBOutlet weak var flagButton: UIButton!
    var litter_id = 0
    var cellDelegate: CellDelegate?
    
    // connect the button from your cell with this method
 
    
    @IBAction func cleanButtonClicked(_ sender: LitterTableViewCell) {
        cellDelegate?.didPressCleanButton(sender)
    }
    @IBAction func flagButtonClicked(_ sender: LitterTableViewCell) {
        cellDelegate?.didPressFlagButton(sender)
    }
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
    

}
