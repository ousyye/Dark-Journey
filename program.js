class DarkJourneyGame:
    def __init__(self, player_name):
        self.player_name = player_name
        self.player_health = 100
        self.player_items = ["Sword", "Health Potion", "Torch"]
        self.enemy_health = 80
        self.enemy_damage = 10

    def player_attack(self):
        print("You attack the enemy with your sword!")
        self.enemy_health -= 20

    def player_use_item(self, item):
        if item == "Health Potion":
            print("You drink the health potion, restoring some health!")
            self.player_health += 20
            self.player_items.remove("Health Potion")
        elif item == "Torch":
            print("You light up the area with your torch, revealing hidden paths!")
            # Add functionality to reveal hidden paths
            self.player_items.remove("Torch")
        else:
            print("You cannot use that item in combat!")

    def enemy_attack(self):
        print("The enemy strikes you!")
        self.player_health -= self.enemy_damage

    def flee(self):
        print("You attempt to flee from the enemy!")
        # Add functionality for fleeing and random encounter chances

    def explore_area(self):
        print("You explore the dark surroundings...")
        # Add exploration events and encounters

    def use_map(self):
        print("You consult your map, gaining insights into the area!")
        # Add functionality to reveal map details and objectives
